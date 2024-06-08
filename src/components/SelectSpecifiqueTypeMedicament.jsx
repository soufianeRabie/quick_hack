import {useGlobalContext} from "@/context/GlobalState.jsx";
import {
    Select,
    SelectContent,
    SelectGroup, SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select.jsx";

export const SelectSpecifiqueTypeMedicament = ({ onTypeChange}) => {

    const displayTrainers = ()=>
    {
        return ['cnss' ,'cnops' , 'cmim'].map((item)=><SelectItem key={item}
                                                                  value={item}>{item}</SelectItem>)
    }
    return (
        <>
            <Select onValueChange={(value)=>onTypeChange(value)}>
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select a type" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectLabel>Groups</SelectLabel>
                        {displayTrainers()}
                    </SelectGroup>
                </SelectContent>
            </Select>
        </>
    )
}
