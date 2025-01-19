import { toast } from "sonner";
import { useGlobalContext } from "@/context/GlobalState.jsx";
import {ActionsApi} from "@/Services/Actions/ActionsApi.js";

function BudgetManager() {
    const { state, dispatch } = useGlobalContext(); // Access global state and dispatch function
    const { lignes_budgetaire } = state; // Extract lignes_budgetaires from the global state
    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December",
    ];

    const handlePlafondChange = (lineId, month, value) => {
        dispatch({
            type: "UPDATE_MONTHLY_PLAFOND",
            payload: {
                id: lineId,
                month,
                plafond: parseFloat(value) || 0,
            },
        });
    };

    const handleSavePlafond = async (lineId) => {
        try {
            // Simulate API call to save data
            const response = ActionsApi.addbudgetairesPlafond(value , lineId)
            toast.success(`Plafonds for Ligne ${lineId} saved successfully!`);
        } catch (error) {
            toast.error(`Failed to save plafonds for Ligne ${lineId}`);
        }
    };

    return (
        <div className="container mx-auto p-8">
            <h3 className="text-2xl font-bold mb-4">Manage Monthly Budget Lines (Plafond)</h3>
            <div className="space-y-6">
                {lignes_budgetaire.map((line) => (
                    <div key={line.id} className="bg-white p-4 rounded-md shadow-md">
                        <div className="flex items-center justify-between mb-2">
                            <h4 className="text-xl font-semibold">
                                Ligne {line.id}: {line.name}
                            </h4>
                        </div>
                        <div className="grid grid-cols-3 gap-4">
                            {months.map((month, index) => (
                                <div key={index} className="mb-4">
                                    <label className="block text-gray-700">{month}</label>
                                    <input
                                        type="number"
                                        value={
                                            line.monthlyPlafonds?.[index + 1] || '' // Dynamically handle months
                                        }
                                        onChange={(e) =>
                                            handlePlafondChange(line.id, index + 1, e.target.value)
                                        }
                                        className="w-full mt-2 p-2 border border-gray-300 rounded-md"
                                        placeholder={`Set plafond for ${month}`}
                                    />
                                </div>
                            ))}
                        </div>
                        <button
                            onClick={() => handleSavePlafond(line.id)}
                            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 mt-4"
                        >
                            Save Plafonds
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default BudgetManager;
