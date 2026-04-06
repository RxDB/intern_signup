import styles from "./CreatePost.module.css";

const CreatePost = ()=>{
    return(
        <div className={styles.card}>
            <div className={styles.inputRow}>
                <input
                placeholder="Search..."
                name="search"
                type="text"
                className={styles.search}
                >
                
                </input>
            </div>
        </div>
    )
}

export default CreatePost