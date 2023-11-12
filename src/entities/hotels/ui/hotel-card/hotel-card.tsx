import { FC } from "react";

import { Hotel } from "shared/api";
import DefaultHotel from "shared/images/hotel-default.jpg";
import { ReactComponent as StarIcon } from "shared/images/icons/star.svg";
import { Text } from "shared/ui/text";

import styles from "./styles.module.scss";

export type HotelCardProps = Hotel;

export const HotelCard: FC<HotelCardProps> = ({
  name,
  city,
  country,
  stars,
}) => {
  const shortAddress = [city, country].join(", ");

  return (
    <div className={styles.card}>
      <div className={styles.cardPhoto}>
        <img src={DefaultHotel} alt="hotel" />
      </div>

      <div className={styles.cardInfo}>
        <Text bold family="semibold" size={16} lineHeight={20}>
          {name}
        </Text>

        <div className={styles.subInfo}>
          <Text size={12}>{shortAddress}</Text>

          <span className={styles.stars}>
            <Text size={12}>{stars}</Text>

            <span>{<StarIcon />}</span>
          </span>
        </div>
      </div>
    </div>
  );
};
