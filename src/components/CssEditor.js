import { useSelector, useDispatch } from 'react-redux'
import { setCss } from '../reducers/rootReducer'

import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-jsx";
import "ace-builds/src-min-noconflict/ext-searchbox";
import "ace-builds/src-min-noconflict/ext-language_tools";

import 'ace-builds/src-noconflict/mode-css';
import 'ace-builds/src-noconflict/snippets/css';
import 'ace-builds/src-noconflict/theme-monokai';

export default function CssEditor() {
    const value = useSelector(state => state.root.codeTabs.css)
    const dispatch = useDispatch()
    return (
        <AceEditor
            placeholder="Write code here"
            mode="css"
            theme="monokai"
            fontSize={15}
            // showPrintMargin={true}
            showGutter={true}
            value={value}
            onChange={(val) => dispatch(setCss(val))}
            highlightActiveLine={true}
            setOptions={{
                enableBasicAutocompletion: false,
                enableLiveAutocompletion: true,
                enableSnippets: true,
                showLineNumbers: true,
                tabSize: 2,
                useWorker: false

            }} />

    )
}