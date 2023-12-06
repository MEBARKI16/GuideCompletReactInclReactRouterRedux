
const FormInputs = ({ label, invalid, onChange, type }) => {
    return (
        <p>
            <label className={`block mb-2 text-[0.75rem] font-bold uppercase tracking-[0.1em] ${invalid ? 'text-[#f87171]' : 'text-[#6b7280]'}`}>{label}</label>
            <input type={type} onChange={onChange} className={`shadow w-full py-3 px-4 leading-normal border border-solid rounded-[0.25rem] ${invalid ? 'text-[#ef4444] border-[#f73f3f] bg-[#fed2d2]' : 'text-[#374151] border-transparent bg-white '}`} />
        </p>
    );
}
export default FormInputs;