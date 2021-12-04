import { marked } from 'marked';
import React from 'react'

import { useDispatch, useSelector } from 'react-redux'

import { enterText } from '../redux/panelSlice';

const Panel = () => {
    const textCurrent = useSelector(state => state.panels.textCurrent)
    const isShowingHelp = useSelector(state => state.panels.isShowingHelp)
    const dispatch = useDispatch()

    const parsedText = marked(textCurrent);


    return (

        <div className="text-panels">
            <textarea
                value={textCurrent}
                onChange={(event) => dispatch(enterText(event.target.value))}
                className="text-panel-left"
                readOnly={isShowingHelp}></textarea>
            <div
                dangerouslySetInnerHTML={{ __html: parsedText }}
                className="text-panel-right">

            </div>
        </div>

    )
}

export default Panel
