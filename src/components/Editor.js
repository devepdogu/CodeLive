import { useSelector, useDispatch } from 'react-redux'
import { setActiveTab } from '../reducers/rootReducer'
import HtmlEditor from './HtmlEditor'
import CssEditor from './CssEditor'
import JsEditor from './JsEditor'
import '../css/editor.css'

export default function Editor() {
    const activeTab = useSelector(state => state.root.activeTab)
    const dispatch = useDispatch()
    return (
        <div className="bg-neutral-800 w-[650px] flex">
            <div className={`h-[100%] w-auto flex flex-col  buttonList p-5`}>
                <p className={`flex-1  ${activeTab === "html" && 'activeTab'}`} onClick={() => dispatch(setActiveTab("html"))}>
                    HTML
                </p>
                <p className={`flex-1  ${activeTab === "css" && 'activeTab'}`} onClick={() => dispatch(setActiveTab("css"))}>
                    CSS
                </p>
                <p className={`flex-1  ${activeTab === "js" && 'activeTab'}`} onClick={() => dispatch(setActiveTab("js"))}>
                    JAVASCRIPT
                </p>
                <p className={`flex-1`}>
                    EXTERNAL
                </p>
            </div>
            <div className='editorArea' style={{ width: "500px" }}>
                {activeTab === "html" && <HtmlEditor />}

                {activeTab === "css" && <CssEditor></CssEditor>}
                {activeTab === "js" && <JsEditor></JsEditor>}

            </div>
        </div>
    )
}