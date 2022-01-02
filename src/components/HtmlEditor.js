import { useSelector, useDispatch } from 'react-redux'
import { setHtml } from '../reducers/rootReducer'
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-jsx";
import "ace-builds/src-min-noconflict/ext-searchbox";
import "ace-builds/src-min-noconflict/ext-language_tools";
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/snippets/html";
import "ace-builds/src-noconflict/theme-monokai";

export default function HtmlEditor() {
    const value = useSelector(state => state.root.codeTabs.html)
    const dispatch = useDispatch()
    return (
        
            <AceEditor
                placeholder="Write code here"
                mode="html"
                theme="monokai"
                fontSize={15}
                // showPrintMargin={true}
                showGutter={true}
                value={value}
                onChange={(val) => dispatch(setHtml(val))}
                highlightActiveLine={true}
                setOptions={{
                    enableBasicAutocompletion: false,
                    enableLiveAutocompletion: true,
                    enableSnippets: true,
                    showLineNumbers: true,
                    
                    useWorker: false
                }} />
       

    )
}