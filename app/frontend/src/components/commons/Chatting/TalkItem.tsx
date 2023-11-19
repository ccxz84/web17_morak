import { Talk } from '@types';
import dayjs from 'dayjs';

import * as styles from './TalkItem.css';

type TalkItemProps = {
  talk: Talk;
  isMine: boolean;
};

export function TalkItem({
  talk: {
    user: { username, profileSrc },
    datetime,
    content,
  },
  isMine,
}: TalkItemProps) {
  return (
    <div className={styles.container}>
      {!isMine && (
        <div className={styles.userInfo}>
          <div className={styles.profileImage}>
            {profileSrc ? (
              <img src={profileSrc} alt={`${username}의 프로필 사진`} />
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="11.5" fill="white" stroke="#1FAB70" />
                <path
                  d="M12 11.2002C12.6329 11.2002 13.2516 11.0125 13.7779 10.6609C14.3041 10.3093 14.7143 9.80948 14.9565 9.22476C15.1987 8.64004 15.262 7.99662 15.1386 7.37588C15.0151 6.75514 14.7103 6.18496 14.2628 5.73743C13.8153 5.2899 13.2451 4.98513 12.6243 4.86166C12.0036 4.73819 11.3602 4.80156 10.7755 5.04376C10.1907 5.28596 9.69097 5.69611 9.33935 6.22235C8.98773 6.74858 8.80005 7.36727 8.80005 8.00017C8.80005 8.84887 9.13719 9.6628 9.73731 10.2629C10.3374 10.863 11.1514 11.2002 12 11.2002ZM12 6.40017C12.3165 6.40017 12.6258 6.49401 12.889 6.66982C13.1521 6.84563 13.3572 7.09552 13.4783 7.38788C13.5994 7.68024 13.631 8.00195 13.5693 8.31232C13.5076 8.62269 13.3552 8.90778 13.1314 9.13154C12.9077 9.35531 12.6226 9.50769 12.3122 9.56943C12.0018 9.63117 11.6801 9.59948 11.3878 9.47838C11.0954 9.35728 10.8455 9.1522 10.6697 8.88908C10.4939 8.62597 10.4 8.31662 10.4 8.00017C10.4 7.57583 10.5686 7.16886 10.8687 6.8688C11.1687 6.56874 11.5757 6.40017 12 6.40017Z"
                  fill="#1FAB70"
                />
                <path
                  d="M11.9999 12.8002C10.5147 12.8002 9.09031 13.3902 8.0401 14.4404C6.9899 15.4906 6.3999 16.915 6.3999 18.4002C6.3999 18.6123 6.48419 18.8158 6.63422 18.9659C6.78425 19.1159 6.98773 19.2002 7.1999 19.2002C7.41208 19.2002 7.61556 19.1159 7.76559 18.9659C7.91562 18.8158 7.9999 18.6123 7.9999 18.4002C7.9999 17.3393 8.42133 16.3219 9.17148 15.5717C9.92162 14.8216 10.939 14.4002 11.9999 14.4002C13.0608 14.4002 14.0782 14.8216 14.8283 15.5717C15.5785 16.3219 15.9999 17.3393 15.9999 18.4002C15.9999 18.6123 16.0842 18.8158 16.2342 18.9659C16.3842 19.1159 16.5877 19.2002 16.7999 19.2002C17.0121 19.2002 17.2156 19.1159 17.3656 18.9659C17.5156 18.8158 17.5999 18.6123 17.5999 18.4002C17.5999 16.915 17.0099 15.4906 15.9597 14.4404C14.9095 13.3902 13.4851 12.8002 11.9999 12.8002Z"
                  fill="#1FAB70"
                />
              </svg>
            )}
          </div>
          <span>{username}</span>
        </div>
      )}
      <div className={`${styles.content} ${isMine && styles.isMine}`}>{content}</div>
      <div className={`${styles.datetime} ${isMine && styles.isMine}`}>{dayjs(datetime).format('MM.DD h:mm A')}</div>
    </div>
  );
}
