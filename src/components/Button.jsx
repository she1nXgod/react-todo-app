import cn from 'classnames';

const Button = ({ type = 'button', children, className, ...props }) => {
  return (
    <button type={type} className={cn('btn', className)} {...props}>
      {children}
    </button>
  );
};

export default Button;
