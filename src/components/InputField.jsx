const InputField = ({ textValue, textChange, addText }) => {
    return (
        <div>
            <label htmlFor="">
                <input
                    type="text"
                    value={textValue}
                    onChange={(e) => textChange(e.target.value)}
                />
                <button onClick={addText}>add task</button>
            </label>
        </div>
    )
}
export default InputField
