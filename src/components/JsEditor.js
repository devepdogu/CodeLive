import { useSelector, useDispatch } from 'react-redux'
import { setJs } from '../reducers/rootReducer'

import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-jsx";
import "ace-builds/src-min-noconflict/ext-searchbox";
import "ace-builds/src-min-noconflict/ext-language_tools";

require(`ace-builds/src-noconflict/mode-javascript`);
require(`ace-builds/src-noconflict/snippets/javascript`);
require(`ace-builds/src-noconflict/theme-monokai`);

export default function JsEditor() {
    const value = useSelector(state => state.root.codeTabs.js)
    const dispatch = useDispatch()
    return (
        <AceEditor
            placeholder="Write code here"
            mode="javascript"
            theme="monokai"
            fontSize={15}
            // showPrintMargin={true}
            showGutter={true}
            value={value}
            onChange={(val) => dispatch(setJs(val))}
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