import { createSlice } from "@reduxjs/toolkit";



const help = `Heading
=======

Sub-heading
-----------

### Another deeper heading

Paragraphs are separated
by a blank line.

Leave 2 spaces at the end of a line to do a
line break

Text attributes *italic*, **bold**,
\`monospace\`, ~~strikethrough~~ .

Shopping list:

  * apples
  * oranges
  * pears

Numbered list:

  1. apples
  2. oranges
  3. pears

The rain---not the reign---in
Spain.

 *[Herman Fassett](https://freecodecamp.com/hermanfassett)*`;

export const panelSlice = createSlice({
    name: "panel",
    initialState: {
        textCurrent: 'this is user input',
        textUser: 'this is user input',
        textHelp: help,
        isShowingHelp: false,
    },
    reducers: {
        enterText: (state, action) => {
            state.textCurrent = action.payload
            state.textUser = action.payload
        },
        showHelp: (state, action) => {
            if (state.isShowingHelp) {
                state.textCurrent = state.textUser;
                state.isShowingHelp = false

            }
            else {
                state.textCurrent = state.textHelp;
                state.isShowingHelp = true
            }
        }
    }
})


export const { enterText, showHelp } = panelSlice.actions;
export default panelSlice.reducer;