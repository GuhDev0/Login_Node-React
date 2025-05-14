type inputType = {
    type : string,
    value : string,
    onChange : (e: React.ChangeEvent<HTMLInputElement>) => void ,
    placeholder : string

}


export default function Input({type,value,onChange,placeholder}: inputType) {
    return (
        <div className="input_name">
            <input
                type={type}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
            /></div>  
        )     
}