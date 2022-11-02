export default function Flags({language, languages, applyPickedLanguage}){
    return languages.map((e, i) => (
        <div
            onClick={() =>
                applyPickedLanguage(e.language)
            }
            style={{ display: "inline" }}
            key={i}
            className={e.language !== language ? "chose-flag" : ""}
        >
            <span
                className={e.classItem}
                data-icon={e.flag}
                data-inline="false"
            ></span>
        </div>
    )
    )
}