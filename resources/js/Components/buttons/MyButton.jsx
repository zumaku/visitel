export default function MyButton({ className = '', name = 'button', type = 'primary', children, ...props }) {
    return (
        <button
            {...props}
            className={`
                flex-center text-body-heavy px-5 rounded-lg py-2 w-fit  
                ${type == 'primary' && 'text-white bg-primary border-2 border-primary hover:border-primary-500 active:border-primary-600 hover:bg-primary-500 active:bg-primary-600'}
                ${type == 'secondary' && 'text-tertiary hover:text-tertiary-500 active:text-tertiary-600 border-2 border-tertiary hover:border-tertiary-500 active:border-tertiary-600 hover:bg-tertiary-100'}
            ` + className}
        >
            {children}
            <p className="w-fit pl-2">{name}</p>
        </button>
    );
}
