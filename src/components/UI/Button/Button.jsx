import cl from './Button.module.scss';

export default function Button({ children, className, ...props }) {
  return (
    <button className={cl[className]} {...props}>
      {children}
    </button>
  );
}
