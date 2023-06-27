import PropTypes from 'prop-types'
import css from './friendlist.module.css';


export default function FriendListItem({ avatar, name, isOnline}) {
  return (<li className={css.item}>
    <span className={isOnline ? css.statusOn : css.statusOff}>{ isOnline }</span>
    <img className={css.avatar} src={avatar} alt={name} width="48" />
    <p className={css.name}>{name}</p>
</li>)
}

FriendListItem.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
};
