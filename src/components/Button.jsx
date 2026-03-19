import cn from 'classnames';
import { motion } from 'motion/react';

const Button = ({ type = 'button', children, className, ...props }) => {
  return (
    <motion.button
      type={type}
      className={cn('btn', className)}
      {...props}
      whileHover={{
        y: -1.5,
        opacity: 0.6,
      }}
    >
      {children}
    </motion.button>
  );
};

export default Button;
