import React, {useEffect, useRef, useState} from 'react';
// import * as XLSX from 'xlsx';
// import { useReactToPrint } from 'react-to-print';
import seancesApi from '../../../../backend/api.json';
// import TimeTableModal from './Modals/TimeTableModal.jsx';
// import {useSeanceHasSameTime} from "../hooks/UseSeanceHasSameTime.js";
// import image from "../../public/Logo-OFPPT-VF-NV.png"
// import {PrintTimeTableHeader} from "./PrintTimeTableHeader.jsx";



export   let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' , 'sunday' ]
export const columnsTime = {
    0: '08:30',
    1: '09:00',
    2: '09:30',
    3: '10:00',
    4: '10:30',
    5: '11:00',
    6: '11:30',
    7: '12:00',
    8: '12:30',
    9: '13:00',
    10: '13:30',
    11: '14:00',
    12: '14:30',
    13: '15:00',
    14: '15:30',
    15: '16:00',
    16: '16:30',
    17: '17:00',
    18: '17:30',
    19: '18:00',
    20: '18:30',
    21:'19:00',
    22: '19:30',
    23: '20:30',
    24: '20:30',
    25: '21:00',
    26: '21:30',
    27: '22:00',
    28: '22:30',
    29: '23:00',
    30: '23:30',
};

function TimeTable({group = 2}) {
    const sessionDuration = 30;
    const [isNightSeances, setIsNightSeances] = useState(false);
    const startHour = 8;
    const startMinute = 30;
    const endHour = isNightSeances?23: 18;
    const endMinute = 30; // Adjusted to 18:30
    const [teachers, setTeachers] = useState([
        { id: 1, name: 'soufiane rabya' },
        { id: 2, name: 'ismail rabya' },
        { id: 3, name: 'abdelkabir rabya' },
        { id: 4, name: 'aymane miftah' },
        { id: 5, name: 'soka salim' },
    ]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [seances, setSeances] = useState([]);
    const [lastId, setLastId] = useState(null);
    const [cancelledOperation, setCancelledOperation] = useState(false);
    const [groups, setGroups] = useState([1 , 2 ,3 , 4]);
    const [clicked, setClicked] = useState({display : false , colIndex : null , row : null})
    const [isAdd, setIsAdd] = useState(true)
    const [startFrom, setStartFrom] = useState('16-03-2024');


    const componentRef = useRef();

    useEffect(() => {
        setSeances(seancesApi.filter((seance)=>seance?.groupId === group));
        console.log(seances)
        console.log(group)
    }, []);

    const totalMinutes = (endHour - startHour) * 60 + (endMinute - startMinute);
    const numCols = totalMinutes / sessionDuration;
    const numRows = isNightSeances?7 : 6;
    const initialTime = startHour * 60 + startMinute;

    const timeToMinutes = (time) => {
        const [hours, minutes] = time.split(':').map(Number);
        return hours * 60 + minutes;
    };

    const formatTime = (time) => {
        const hours = Math.floor(time / 60);
        const minutes = time % 60;
        return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
    };


    const calculateColumnIndex = (session) => {
        const startMinutes = timeToMinutes(session.start);
        return Math.max(Math.floor((startMinutes - initialTime) / sessionDuration), 0);
    };

    const calculateRowSpan = (session) => {
        const startMinutes = timeToMinutes(session.start);
        const endMinutes = timeToMinutes(session.end);
        return Math.ceil((endMinutes - startMinutes) / sessionDuration);
    };

    const tableData = Array.from({ length: numRows }, () => Array(numCols).fill(null));

    seances.forEach((session) => {
        console.log(session)
        const dayIndex = session?.dayId - 1;
        console.log("session " , session);
        console.log("day id " , dayIndex );
        const columnIndex = calculateColumnIndex(session);
        const rowspan = calculateRowSpan(session);

        for (let i = 0; i < rowspan; i++) {
            // console.log(tableData[dayIndex])
            tableData[dayIndex][columnIndex + i] = session;
        }
    });

    const [isSelecting, setIsSelecting] = useState(false);
    const [selectedSlots, setSelectedSlots] = useState([]);
    const startSlot = useRef(null);
    const [draggedColumns, setDraggedColumns] = useState([]);

    const handleSlotMouseDown = (dayIndex, colIndex) => {
        console.log("mouse down now ");
        setIsSelecting(true);
        // setSelectedSlots([{ day: dayIndex, col: colIndex }]);
        startSlot.current = { day: dayIndex, col: colIndex };
    };

    const handleSlotMouseEnter = (dayIndex, colIndex) => {
        console.log("mouse enter");
        if (!isSelecting) return;
        const endSlot = { day: dayIndex, col: colIndex };
        const slots = getSlotsBetween(startSlot.current, endSlot);
        setSelectedSlots(slots);
        console.log("slots", slots);
    };



    const getSlotsBetween = (start, end) => {
        const slots = [];
        const [minCol, maxCol] = [Math.min(start.col, end.col), Math.max(start.col, end.col)];
        for (let col = minCol; col <= maxCol; col++) {
            slots.push({ day: start.day, col });
        }
        return slots;
    };

    const handleSlotMouseUp = () => {
        setIsSelecting(false);
        setDraggedColumns([...selectedSlots]);
        draggedCol(draggedColumns)
    };
    const draggedCol = (draggedColumns) => {
        setIsModalOpen(true); // Set isModalOpen to true
        console.log('dragged Column ', draggedColumns);
        console.log(columnsTime[draggedColumns[0]?.col]);
        console.log(columnsTime[draggedColumns[draggedColumns.length - 1]?.col + 1]);
    };

    useEffect(() => {
        if (isModalOpen === false && cancelledOperation === true) {
            startSlot.current = null;
            setIsSelecting(false);
            setDraggedColumns([]);
            setSelectedSlots([]);
            window.location.reload();
            setCancelledOperation(false)
        }
    }, [isModalOpen]);

    const handleCancelClick = (e) => {
        e.preventDefault();
        setIsSelecting(false);
        setDraggedColumns([]);
        setSelectedSlots([]);
    };

    const handleAddSeance = (seance) => {

        console.log(seance)
        const id = lastId || seances[seances.length - 1]?.id + 1;
        seances.push({ ...seance, id: id });
        setLastId(id + 1);
        setIsModalOpen(false)

    };

    const groupedSeances = seances.reduce((acc, seance) => {
        if (!acc[seance.groupId]) {
            acc[seance.groupId] = [];
        }
        acc[seance.groupId].push(seance);
        return acc;
    }, {});



    // const exportToExcel = () => {
    //     // Create a new workbook
    //     const wb = XLSX.utils.book_new();
    //
    //     Object.entries(groupedSeances).forEach(([groupId, groupSeances]) => {
    //         // Convert data array to worksheet
    //         const ws = XLSX.utils.json_to_sheet(groupSeances);
    //
    //         // Add the worksheet to the workbook
    //         XLSX.utils.book_append_sheet(wb, ws, `Group ${groupId}`);
    //     });
    //
    //     // Save the workbook as an Excel file
    //     XLSX.writeFile(wb, 'data.xlsx');
    // };

    // const handlePrint = useReactToPrint({
    //     content: () =>   componentRef.current
    // });

    return (
        < div className="container w-full flex flex-col items-center mt-12"  ref={componentRef}>
            {/*<PrintTimeTableHeader startFrom ={startFrom}/>*/}
            <h1 className={'text-2xl mx-auto my-2 '}>DEVOWFS201</h1>
            <h1 className={'text-xl text-slate-900 my-3' }>Night Classes</h1>
            <div>
                <table className="table-auto border-collapse border border-gray-500">
                    <thead>
                    <tr>
                        <th>Day / Hour</th>
                        {[...Array(numCols / 2)].map((_, colIndex) => (
                            <th key={colIndex} colSpan={2}
                                className="text-xs  border border-slate-700 font-sans font-normal">
                                {formatTime(initialTime + (colIndex + colIndex) * sessionDuration)} | {formatTime(initialTime + (colIndex + colIndex + 2) * sessionDuration)}
                            </th>
                        ))}
                    </tr>
                    </thead>
                    <tbody>
                    {tableData.map((row, dayIndex) => (
                        <tr key={dayIndex}>
                            <th className="border border-gray-500 px-4 py-2">{days[dayIndex]}</th>
                            {row.map((session, colIndex) => {
                                if (!session) {
                                    const isSelected = selectedSlots.some(slot => slot.day === dayIndex && slot.col === colIndex);
                                    return (
                                        <td
                                            key={colIndex}
                                            className={`${isSelected  ? 'selected cursor-grabbing'  : 'border cursor-grab'} ${(colIndex % 2 === 0 && !((colIndex + 1) % 5 === 0)) ? 'border-r-blue-100' : (((colIndex + 1) % 5 === 0)) ? 'border-r-red-600 ' : 'border-r-green-200'}`}
                                            onMouseDown={() => handleSlotMouseDown(dayIndex, colIndex)}
                                            onMouseEnter={() => handleSlotMouseEnter(dayIndex, colIndex)}
                                            onMouseUp={handleSlotMouseUp}
                                        >
                                            {/* Add draggable content here */}
                                        </td>
                                    );
                                } else {
                                    const colSpan = calculateRowSpan(session);
                                    if (colSpan > 1 && colIndex !== calculateColumnIndex(session)) {
                                        return null;
                                    }
                                    const teacher = teachers.find((teacher) => teacher?.id === session?.teacherId);
                                    return (
                                        <td key={colIndex} colSpan={colSpan}
                                            onClick={()=>setClicked({display:  true , colIndex: colIndex , row: dayIndex})}
                                            className={`${session?.type === "present" ? 'bg-red-400 ' : 'bg-blue-400'}  border relative border-gray-500 text-white text-center outline-0 px-4 py-2 cursor-pointer`}>
                                            <span className={'text-white font-semibold'}>{`${teacher?.name} `}
                                            </span>
                                        </td>
                                    );
                                }
                            })}
                        </tr>
                    ))}
                    </tbody>
                </table>
                {/*{isModalOpen &&*/}
                {/*    <TimeTableModal canceledOperation={(value) => setCancelledOperation(value)}*/}
                {/*                    DraggedColumns={draggedColumns} group ={group} CancelIsModal={() => setIsModalOpen(false)}*/}
                {/*                    handleAddSeance={handleAddSeance}/>}*/}
            </div>
            <div className={"flex gap-3  my-5"}>
                {/*<button className={"bg-blue-900 px-3 py-2 rounded-md text-white"} onClick={handlePrint}>Print</button>*/}
                {/*<button className={'bg-blue-900 px-3 py-2 rounded-md text-white'} onClick={exportToExcel}>Export to Excel</button>*/}
            </div>
        </div>
    );
}

export default TimeTable;

