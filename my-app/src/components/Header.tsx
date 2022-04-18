import { motion, useAnimation, useViewportScroll } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, NavLink, useHistory, useRouteMatch } from 'react-router-dom';
import styled from 'styled-components';
import { NetflixLogo, SearchIcon } from '../Icons';
import { NavCircle } from './ui/Shape';

const Nav = styled(motion.nav)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
  top: 0;
  height: 8rem;
  font-size: 1.4rem;
  padding: 2rem 6rem;
  color: #fff;
  z-index: 10;
`;

const Col = styled.div`
  display: flex;
  align-items: center;
`;

const Items = styled.ul`
  display: flex;
  align-items: center;
`;

const Item = styled.li`
  margin-right: 2rem;
  color: ${props => props.theme.white.darker};
  transition: color 0.3s ease-in-out;
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  &:hover {
    color: ${props => props.theme.white.lighter};
  }
`;

const SearchInput = styled(motion.input)`
  transform-origin: right center;
  position: absolute;
  right: 0;
  padding: 1rem 2rem;
  padding-left: 40px;
  z-index: -1;
  color: #fff;
  font-size: 1.6rem;
  background-color: transparent;
  border: 1px solid ${props => props.theme.white.lighter};
`;

const navVariants = {
  top: {
    backgroundColor: 'rgba(0, 0, 0, 0)',
  },
  scroll: {
    backgroundColor: 'rgba(0, 0, 0, 1)',
  },
};

const SearchForm = styled.form`
  color: white;
  display: flex;
  align-items: center;
  position: relative;
  svg {
    height: 25px;
    cursor: pointer;
  }
`;

interface IForm {
  keyword: string;
}

const Header = () => {
  const histroy = useHistory();
  const homeMatch = useRouteMatch('/');
  const tvMatch = useRouteMatch('/tv');
  const [searchOpen, setSearchOpen] = useState(false);
  const navAnimation = useAnimation();
  const { scrollY } = useViewportScroll();

  const onToggleSearch = () => {
    setSearchOpen(prev => !prev);
  };

  const { register, handleSubmit } = useForm<IForm>();

  useEffect(() => {
    scrollY.onChange(() => {
      if (scrollY.get() > 80) {
        navAnimation.start('scroll');
      } else {
        navAnimation.start('top');
      }
    });
  }, [scrollY]);

  const onValidHandler = (data: IForm) => {
    histroy.push(`/search?keyword=${data.keyword}`);
  };

  return (
    <Nav variants={navVariants} animate={navAnimation} initial={'top'}>
      <Col>
        <NetflixLogo />
        <Items>
          <Item>
            <Link to='/'>Home</Link>
            {homeMatch?.isExact && <NavCircle layoutId='nav_circle' />}
          </Item>
          <Item>
            <Link to='/tv'>Tv Shows</Link>
            {tvMatch?.isExact && <NavCircle layoutId='nav_circle' />}
          </Item>
        </Items>
      </Col>
      <Col>
        <SearchForm onSubmit={handleSubmit(onValidHandler)}>
          <SearchIcon onClick={onToggleSearch} searchOpen={searchOpen} />

          <SearchInput
            {...register('keyword', { required: true, minLength: 2 })}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: searchOpen ? 1 : 0 }}
            transition={{ type: 'linear' }}
            placeholder='Search for movie or tv show...'
          />
        </SearchForm>
      </Col>
    </Nav>
  );
};

export default Header;
