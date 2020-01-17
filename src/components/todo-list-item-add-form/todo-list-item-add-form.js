import React, {useRef} from 'react';

const TodoListItemAddForm = ({ onItemAdd }) => {
    const inputRef = useRef(null);

    return (<>
        <div className="input-field">
            <input ref={inputRef}/>
        </div>
        <button
            className="btn waves-effect waves-light"
            onClick={() => {
                const labelEl = inputRef.current;

                if(!labelEl) return;

                const value = labelEl.value;

                labelEl.classList.remove("invalid");
                value ? onItemAdd(value) : labelEl.classList.add("invalid");
                labelEl.value = '';
            }}
        >
            Add
        </button>
    </>);

};

export default TodoListItemAddForm;