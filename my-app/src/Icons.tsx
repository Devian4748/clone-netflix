import styled from 'styled-components';
import { motion } from 'framer-motion';

const Logo = styled(motion.svg)`
  margin-right: 5rem;
  width: 9.5rem;
  height: 2.5rem;

  fill: ${props => props.theme.red};
  path {
    stroke-width: 6px;
    stroke: white;
  }
`;

export const NetflixLogo = () => {
  const logoVariants = {
    normal: {
      fillOpacity: 1,
    },
    active: {
      fillOpacity: [0, 1, 0],
      transition: {
        repeat: Infinity,
      },
    },
  };

  return (
    <Logo
      variants={logoVariants}
      whileHover='active'
      initial='normal'
      xmlns='http://www.w3.org/2000/svg'
      width='1024'
      height='276.742'
      viewBox='0 0 1024 276.742'
    >
      <motion.path
        fill='red'
        d='M140.803 258.904c-15.404 2.705-31.079 3.516-47.294 5.676l-49.458-144.856v151.073c-15.404 1.621-29.457 3.783-44.051 5.945v-276.742h41.08l56.212 157.021v-157.021h43.511v258.904zm85.131-157.558c16.757 0 42.431-.811 57.835-.811v43.24c-19.189 0-41.619 0-57.835.811v64.322c25.405-1.621 50.809-3.785 76.482-4.596v41.617l-119.724 9.461v-255.39h119.724v43.241h-76.482v58.105zm237.284-58.104h-44.862v198.908c-14.594 0-29.188 0-43.239.539v-199.447h-44.862v-43.242h132.965l-.002 43.242zm70.266 55.132h59.187v43.24h-59.187v98.104h-42.433v-239.718h120.808v43.241h-78.375v55.133zm148.641 103.507c24.594.539 49.456 2.434 73.51 3.783v42.701c-38.646-2.434-77.293-4.863-116.75-5.676v-242.689h43.24v201.881zm109.994 49.457c13.783.812 28.377 1.623 42.43 3.242v-254.58h-42.43v251.338zm231.881-251.338l-54.863 131.615 54.863 145.127c-16.217-2.162-32.432-5.135-48.648-7.838l-31.078-79.994-31.617 73.51c-15.678-2.705-30.812-3.516-46.484-5.678l55.672-126.75-50.269-129.992h46.482l28.377 72.699 30.27-72.699h47.295z'
      />
    </Logo>
  );
};

interface ISearchIcon {
  onClick: () => void;
  searchOpen: boolean;
}

export const SearchIcon: React.FC<ISearchIcon> = ({ onClick, searchOpen }) => {
  return (
    <>
      <motion.svg
        onClick={onClick}
        transition={{ type: 'linear' }}
        animate={{ x: searchOpen ? -223 : 0 }}
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 512 512'
        fill='currentColor'
      >
        <path
          d='M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z'
          fillRule='evenodd'
          clipRule='evenodd'
        />
      </motion.svg>
    </>
  );
};
