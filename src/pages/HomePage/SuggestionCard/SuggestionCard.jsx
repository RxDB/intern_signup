import styles from "./SuggestionCard.module.css";
import suggestion1 from "../../../assets/suggestions/1691240541842.jpeg";
import suggestion2 from "../../../assets/suggestions/1705255323848.jpeg";
import suggestion3 from "../../../assets/suggestions/1713795109052.jpeg";
import suggestion4 from "../../../assets/suggestions/1732875366373.jpeg";
import suggestion5 from "../../../assets/suggestions/1740908165366.jpeg";
import arrow from "../../../assets/arrow.svg"

const suggestions = [
  {
    icon: suggestion1,
    name: "Emma Laurent",
    title: "UI/UX Designer",
  },
  {
    icon: suggestion2,
    name: "Luca Moretti",
    title: "Product Designer",
  },
  {
    icon: suggestion3,
    name: "Sofia Lindberg",
    title: "Frontend Developer",
  },
  {
    icon: suggestion4,
    name: "Mateo Kovac",
    title: "Mobile App Designer",
  },
  {
    icon: suggestion5,
    name: "Clara Hoffmann",
    title: "Visual Designer",
  },
];

const SuggestionCard = ()=>{
    return(
          <div className={styles.card}>
              <div className={styles.header}>
                <div className={styles.title}>Add to your feed</div>
                <div className={styles.arrow}>
                  <img src={arrow}/>
                </div>
              </div>
        
              <div className={styles.suggestionList}>
                {suggestions.map((suggestion) => (
                  <div key={suggestion.title} className={styles.suggestionRows}>
                    
                    <img src={suggestion.icon} alt="profile" className={styles.profile}/>
                    <div className={styles.names}>
                    <span className={styles.hashName}>{suggestion.name}</span>
                    <span className={styles.title}>{suggestion.title}</span>
                    </div>
                    <button className={styles.addButton}>+</button>

                  </div>
                ))}
              </div>
            </div>
    )
}

export default SuggestionCard
