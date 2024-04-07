import { useSelector,useDispatch } from 'react-redux';
import { onAddNewEvent, onDeleteEvent, onSetActiveEvent, onUpdateEvent } from '../store';
import { CalendarEvent } from '../calendary/components';



export const useCalendarStore = () => {
    const dispatch = useDispatch();
    const { events, activeEvent } = useSelector(state => state.calendar);

    const setActiveEvent = ( calendarEvent ) => {
        dispatch(onSetActiveEvent(calendarEvent))
    }

    const startSavingEvent = async(calendarEvent) => {
        //

        //
        if(CalendarEvent._id) {
            //actualizando
            dispatch(onUpdateEvent({...calendarEvent}));
        } else {
            //creando
            dispatch(onAddNewEvent({...calendarEvent,_id:new Date().getTime}));
        }
    }

    const startDeletingEvent = () => {
        dispatch(onDeleteEvent());
    }

    return {
        //propiedades
        activeEvent,
        events,
        hasEventSelected: !!activeEvent,
        //metodos
        startDeletingEvent,
        setActiveEvent,
        startSavingEvent,
    }
}
