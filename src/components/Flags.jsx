export default function Flags({language, languages, applyPickedLanguage}){
    return (
        <div className="col-md-12 mx-auto text-center language">
            {
                languages.map((e, i) => <Flag item={e} index={i} choseLanguage={language} applyPickedLanguage={applyPickedLanguage} />)
            }
        </div>
    )    
}

function Flag({ item, index, choseLanguage, applyPickedLanguage }) {
    const {
        language,
        classItem,
        flag
    } = item

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