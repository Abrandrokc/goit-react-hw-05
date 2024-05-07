import css from "./MovieInput.module.css"
export default function MovieInput({ onSumbit }) {
     const handleSubmit = (el) => {
        
        el.preventDefault();
        onSumbit(el.target.elements.query.value);
        el.target.reset()
        
    }
     return <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Search for movies..."
                    autoFocus
                    autoComplete="off"
                    name="query"
                />
                <button type="submit">Search</button>
            </form>
}