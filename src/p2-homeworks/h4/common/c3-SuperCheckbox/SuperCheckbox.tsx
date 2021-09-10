import React, { ChangeEvent, DetailedHTMLProps, InputHTMLAttributes } from 'react'
// тип пропсов обычного инпута
type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperCheckboxPropsType = DefaultInputPropsType & {
    onChangeChecked?: (checked: boolean) => void
    spanClassName?: string
}

const SuperCheckbox: React.FC<SuperCheckboxPropsType> = (
    {
        type,
        onChange, onChangeChecked,
        className, spanClassName,
        children,

        ...restProps// все остальные пропсы попадут в объект restProps
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChangeChecked && onChangeChecked(e.currentTarget.checked)
        onChange && onChange(e)
    }

    const finalInputClassName = `hw4__checkbox ${className ? className : ''}`

    return (
        <label className={'hw4__checkbox-container'}>
            <input
                type={'checkbox'}
                onChange={onChangeCallback}
                className={finalInputClassName}
                checked={restProps.checked}
                {...restProps}
            />
            {children && <span className={'hw4__checkbox-title '}>{children}</span>}
        </label>
    )
}

export default SuperCheckbox
