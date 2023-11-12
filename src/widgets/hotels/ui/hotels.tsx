import { useEffect } from "react";
import { useAlert } from "react-alert";

import { HotelCard, hotelsModel } from "entities/hotels";
import { useInfiniteScroll } from "shared/hooks";
import { Loader } from "shared/ui/loader";
import { MainContainer } from "shared/ui/main-container";

import { LIMIT } from "./config";

import styles from "./styles.module.scss";

export const Hotels = () => {
  const alert = useAlert();

  const hotels = hotelsModel.hooks.useSelectHotels();
  const loading = hotelsModel.hooks.useSelectLoading();

  const getHotels = hotelsModel.hooks.useGetHotels();
  const pageTotal = hotelsModel.hooks.useSelectPageTotal();

  const { cbRef, page } = useInfiniteScroll();

  useEffect(() => {
    if (pageTotal >= page) {
      getHotels(
        { query: { limit: LIMIT, page } },
        { onError: ({ message }) => alert.error(message) },
      );
    }
  }, [page]);

  return (
    <MainContainer className={styles.mainContainer}>
      <div className={styles.container}>
        <div className={styles.hotels}>
          {hotels.map((hotel) => (
            <div key={hotel._id} ref={cbRef}>
              <HotelCard key={hotel._id} {...hotel} />
            </div>
          ))}
        </div>

        {loading && <Loader />}
      </div>

      {/* <div ref={loadMoreRef} /> */}
    </MainContainer>
  );
};
