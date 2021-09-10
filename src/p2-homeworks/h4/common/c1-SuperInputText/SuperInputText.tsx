import React, { ChangeEvent, DetailedHTMLProps, InputHTMLAttributes, KeyboardEvent } from 'react'
// тип пропсов обычного инпута
type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

// здесь мы говорим что у нашего инпута будут такие же пропсы как у обычного инпута
// (чтоб не писать value: string, onChange: ...; они уже все описаны в DefaultInputPropsType)
type SuperInputTextPropsType = DefaultInputPropsType & { // и + ещё пропсы которых нет в стандартном инпуте
    onChangeText?: (value: string) => void
    onEnter?: () => void
    error?: string
    spanClassName?: string
}

const SuperInputText: React.FC<SuperInputTextPropsType> =
    ({
        type,
        onChange, onChangeText,
        onKeyPress, onEnter,
        error,
        className, spanClassName,

        ...props
    }) => {
        const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
            onChange && onChange(e)
            onChangeText && onChangeText(e.currentTarget.value)
        }

        const onKeyPressCallback = (e: KeyboardEvent<HTMLInputElement>) => {
            onKeyPress && onKeyPress(e);
            onEnter && e.key === 'Enter' && onEnter()
        }
        const finalSpanClassName = `${error ? 'hw4__span visible' : 'hw4__span'}`
        const finalInputClassName = `${error ? 'hw4__input error-input' : 'hw4__input'}`
        return (
            <>
                <input
                    type={'text'}
                    onChange={onChangeCallback}
                    onKeyPress={onKeyPressCallback}
                    className={finalInputClassName}
                    value={props.value}
                    {...props}
                />
                <div className={'hw4__error-container'}>
                    {error && <span className={finalSpanClassName}>{error}</span>}
                </div>
            </>
        )
    }

export default SuperInputText
