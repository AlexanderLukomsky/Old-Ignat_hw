import React, { ChangeEvent, useState } from 'react'
import SuperInputText from './common/c1-SuperInputText/SuperInputText'
import './hw4.scss'
import SuperButton from './common/c2-SuperButton/SuperButton'
import SuperCheckbox from './common/c3-SuperCheckbox/SuperCheckbox'

function HW4() {
    const [text, setText] = useState<string>('')
    const error = text ? '' : 'error'

    const showAlert = () => {
        if (error) {
            alert('введите текст...')
        } else {
            alert(text) // если нет ошибки показать текст
        }
    }

    const [checked, setChecked] = useState<boolean>(false)
    const testOnChange = (e: ChangeEvent<HTMLInputElement>) => setChecked(e.currentTarget.checked)
    const onFocus = () => {
        setText('')
    }
    return (
        <div className={'hw4 homeworks'}>
            <div className={'hw4__title title'}>
                homeworks 4
            </div>

            <div className={'hw4__container'}>
                <SuperInputText
                    value={text}
                    onChangeText={setText}
                    onEnter={showAlert}
                    error={error}
                    spanClassName={''}
                />
                <SuperButton>
                    default
                </SuperButton>
                <SuperButton
                    red
                    onClick={showAlert}
                >
                    delete
                </SuperButton>
                <SuperButton disabled>
                    disabled
                </SuperButton>

                <SuperCheckbox
                    checked={checked}
                    onChangeChecked={setChecked}
                >
                    some text
                </SuperCheckbox>
                <SuperCheckbox checked={checked} onChange={testOnChange} >
                    some text -2
                </SuperCheckbox>
            </div>
        </div>
    )
}

export default HW4
