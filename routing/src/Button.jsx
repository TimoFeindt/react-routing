// type childProp = {
//     children: Text,
//     primary: Boolean,
//     secondary: Boolean,
//     success: Boolean,
//     warning: Boolean,
//     error: Boolean,
//     outline: Boolean,
//     rounded: Boolean,
// }

import classNames from 'classnames'

export default function Button({
    children,
    primary,
    secondary,
    success,
    warning,
    error,
    outline,
    rounded,
    ...rest
    }) {

        if(primary && secondary) {
            throw new Error('only one: primary or secondary!')
        } else if (success && (warning || error)) {
            throw new Error('only one: success, warning or error')
        }  else if (warning && error) {
            throw new Error('only one: success, warning or error')
        }
        // else if(typeof primary !== 'boolean' || typeof secondary !== 'boolean' || typeof success !== 'boolean' || typeof warning !== 'boolean' || typeof error !== 'boolean' || typeof outline !== 'boolean' || typeof rounded !== 'boolean') {
        //     throw new Error('you used an invalid type for the props')
        // }

        const fullClassName = classNames(rest.className,'flex items-center border text-white px-3 py-2', 'm-2',{
            'bg-violet-700 border-violet-800': primary,
            'bg-blue-400 border-blue-500': secondary,
            'bg-green-400 border-green-500': success,
            'bg-yellow-400 border-yellow-500': warning,
            'bg-red-400 border-red-500': error,
            'bg-neutral-100': outline,
            'rounded-full': rounded,
            'text-violet-700': primary && outline,
            'text-blue-400': secondary && outline,
            'text-green-400': success && outline,
            'text-yellow-400': warning && outline,
            'text-red-400': error && outline,
            'text-black': outline && rounded,
        })


        console.log(rest)
    return(
        <button {...rest} className={fullClassName}>
            {children}
        </button>
    )
}