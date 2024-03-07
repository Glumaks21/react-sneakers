import cl from './Input.module.scss';

export default function Input(props) {
  return <input className={cl.input} {...props} />;
}
