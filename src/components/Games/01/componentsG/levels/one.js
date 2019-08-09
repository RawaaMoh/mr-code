import React, { useState } from "react";
import AceEditor from "react-ace";
import brace from 'brace';
import 'brace/theme/github';
import 'brace/mode/css';


//change the ball color

const defaultCss = `.ball {
    fill: green;
}`

const correctCss = `.ball {
    fill: red;
}`

function One({ moveToNextLevel }) {
    const [css, setCss] = useState(defaultCss)

    const handleCssChange = (newCss) => {
        setCss(newCss);
        if (newCss === correctCss) {
            moveToNextLevel()
        }
    }

    return (
        <div>
            <style id="hello-look-here">{css}</style>
            <div>
                <h2> Editor </h2>
                <AceEditor
                mode="css"
                    // placeholder={this.state.placeholder}
                    // mode={this.state.mode}
                    theme="github"
                    name="blah2"
                // onLoad={this.onLoad}
                onChange={handleCssChange}
                // onSelectionChange={this.onSelectionChange}
                // onCursorChange={this.onCursorChange}
                // onValidate={this.onValidate}
                 value={css}
                // fontSize={this.state.fontSize}
                // showPrintMargin={this.state.showPrintMargin}
                // showGutter={this.state.showGutter}
                // highlightActiveLine={this.state.highlightActiveLine}

                // setOptions={{ //dont need it for now
                //     // enableBasicAutocompletion: this.state.enableBasicAutocompletion,
                //     // enableLiveAutocompletion: this.state.enableLiveAutocompletion,
                //     // enableSnippets: this.state.enableSnippets,
                //     // showLineNumbers: this.state.showLineNumbers,
                //     tabSize: 2
                // }}
                />
            </div>

            {/* <div> //this should be the game or something like that
                <h2>Code</h2>
                <AceEditor
                    // mode="jsx" if you want try to add different modes as games 
                    // theme="monokai" try to add differen theme later
                    readOnly={true}
                    // value={`<AceEditor
                    //     placeholder="${this.state.placeholder}"
                    //     mode="${this.state.mode}"
                    //     theme="${this.state.theme}"
                    //     name="blah2"
                    //     onLoad={this.onLoad}
                    //     onChange={this.onChange}
                    //     fontSize={${this.state.fontSize}}
                    //     showPrintMargin={${this.state.showPrintMargin}}
                    //     showGutter={${this.state.showGutter}}
                    //     highlightActiveLine={${this.state.highlightActiveLine}}
                    //     value={\`${this.state.value}\`}
                    //     setOptions={{
                    //     enableBasicAutocompletion: ${this.state.enableBasicAutocompletion},
                    //     enableLiveAutocompletion: ${this.state.enableLiveAutocompletion},
                    //     enableSnippets: ${this.state.enableSnippets},
                    //     showLineNumbers: ${this.state.showLineNumbers},
                    //     tabSize: 2,
                    //     }}/>
                    // `}
                />
            </div> */}

        </div>
    );
}

export default One;