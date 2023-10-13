import store from "../../config/localStore";

function Flag({ item, index}) {
    const [choseLanguage, setLanguage] = store.useState("language")
    
    const {
        language,
        classItem,
        flag
    } = item

    // Change Language
    const applyPickedLanguage = (language) => {
        setLanguage(language)
    }    
    
    return (
        <div
        onClick={() =>
            applyPickedLanguage(language)
        }
        style={{ display: "inline" }}
        key={index}
        className={language !== choseLanguage ? "chose-flag" : ""}
        >
            <span
                className={classItem}
                data-icon={flag}
                data-inline="false"
                ></span>
        </div>
    )
}


export default function Flags(){
    const [languages] = store.useState("languages")

    return (
        <div className="col-md-12 mx-auto text-center language">
            {
                languages.map((e, i) => <Flag key={i} item={e} index={i} />)
            }
        </div>
    )    
}