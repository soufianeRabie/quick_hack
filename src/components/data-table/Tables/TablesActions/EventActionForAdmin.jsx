import React from 'react';
import {Button} from "@/components/ui/button.jsx";

function EventActionForAdmin() {
    return (
        <div className={'flex gap-2 '}>
            <Button size={'sm'}>validate </Button>
            <Button size={'sm'} variant="destructive">delete</Button>
        </div>
    );
}

export default EventActionForAdmin;