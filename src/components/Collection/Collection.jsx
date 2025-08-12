import { Box as MuiBox, Button, Chip, Stack, TextField, Card, CardContent, CardMedia, Typography, CircularProgress, ButtonGroup } from "@mui/material";
import KeyboardArrowUpRoundedIcon from '@mui/icons-material/KeyboardArrowUpRounded';
import { useEffect, useState, useMemo, useCallback } from "react";
import { useWindowSize } from "../../store/ResizeProvider";
import { useAlert } from "../../store/AlertProvider";
import { useNavigate } from "react-router-dom";
import { Table } from "../common";
import { useForm, Controller } from "react-hook-form";
import { useRecoilState } from "recoil";
import { atomCollection } from "../../atoms/atomsCollection";
import { t } from "i18next";
import "./Collection.css";

import styled from "@emotion/styled";

import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import SearchLogo from "../UI/Buttons/SearchLogo";
import ClearLogo from "../UI/Buttons/ClearLogo";
import { useTheme } from "@emotion/react";

const Collection = () => {
  const theme = useTheme();
  const windowSize = useWindowSize();
  const alert = useAlert();
  const [data, setData] = useState([]);
  const [brands, setBrands] = useState([t("all")]);
  const [filteredData, setFilteredData] = useState([]);
  const [viewMode, setViewMode] = useState("cards"); // "table" or "cards"
  const [filters, setFilters] = useRecoilState(atomCollection);
  const [loading, setLoading] = useState(true);
  const [visibleCards, setVisibleCards] = useState(10); // Number of cards to show initially
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Show scroll-to-top button after threshold
  useEffect(() => {
    const handleScrollBtn = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScrollBtn);
    return () => window.removeEventListener('scroll', handleScrollBtn);
  }, []);
  // Infinite scroll effect
  useEffect(() => {
    if (viewMode !== 'cards') return;
    const handleScroll = () => {
      if (isLoadingMore) return;
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;
      const fullHeight = document.body.offsetHeight;
      if (scrollY + viewportHeight >= fullHeight - 100 && filteredData.length > visibleCards) {
        setIsLoadingMore(true);
        setTimeout(() => {
          setVisibleCards((prev) => prev + 10);
          setIsLoadingMore(false);
        }, 1200);
      }
    };

    // Workaround for zoomed out or large screens: load more if page isn't scrollable
    const checkPageFill = () => {
      if (isLoadingMore) return;
      if (document.body.offsetHeight <= window.innerHeight && filteredData.length > visibleCards) {
        setIsLoadingMore(true);
        setTimeout(() => {
          setVisibleCards((prev) => prev + 10);
          setIsLoadingMore(false);
        }, 1200);
      }
    };

    window.addEventListener('scroll', handleScroll);
    const resizeObserver = new window.ResizeObserver(checkPageFill);
    resizeObserver.observe(document.body);
    checkPageFill();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      resizeObserver.disconnect();
    };
  }, [isLoadingMore, visibleCards, filteredData.length, viewMode]);

  const defaultValues = useMemo(() => {
    return {
      num: "",
      name: "",
      brand: "all",
    };
  }, []);

  const { control, handleSubmit, getValues, setValue, reset } = useForm({
    defaultValues: filters,
  });

  useEffect(() => {
    document.title = t("applicationName") + " - " + t("Home");
    fetchData();
    return () => {
      setFilters(getValues());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchData = useCallback(() => {
    fetch(
      "https://raw.githubusercontent.com/Extrance/data/main/collection.json"
    )
      .then((res) => res.json())
      .then((out) => {
        setData(out.data);
        const counts = out.data.reduce((acc, { brand }) => {
          acc[brand] = (acc[brand] || 0) + 1;
          return acc;
        }, {});
        const newList = Object.keys(counts).sort((a, b) => counts[b] - counts[a]).slice(0, 3);
        setBrands(['all', ...newList]);
        filter(out.data);
      })
      .catch(() => alert.showErrorAlert(t("errorRetrieve")));
  }, []);

  const filter = (items = data) => {
    setFilteredData(
      items.filter(
        (item) =>
          item.id.includes(getValues("num")) &&
          item.name.includes(getValues("name")) &&
          (getValues("brand") === "all" ||
            item.brand.includes(getValues("brand")))
      )
    );
    if (loading) setLoading(false);
  };

  const navigate = useNavigate();

  const columns = useMemo(() => {
    return [
      {
        header: t("id"),
        accessorKey: "id",
        size: "small",
        cell: ({ row }) => (
          <Button variant="text" className="gradient-text" onClick={() => navigate(`${row.original.id}`)} >
            {row.original.id}
          </Button>
        ),
      },
      {
        header: t("brand"),
        accessorKey: "brand",
        size: "small",
        cell: ({ row }) => (
          <Stack display="flex" justifyContent="center" minHeight="33px">
            <div>{row.original.brand}</div>
            {row.original?.subBrand && (
              <div style={{ fontSize: 10 }}>{row.original.subBrand}</div>
            )}
          </Stack>
        ),
      },
      {
        header: t("name"),
        accessorKey: "name",
        size: "small",
      },
    ];
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filteredData]);

  const onSubmit = useCallback(() => {
    filter(data);
  }, [data]);

  return (
    <Box>
      <form onSubmit={handleSubmit(onSubmit)}>
        {windowSize.width > 600 && <Grid container spacing={1}>
          <Grid>
            <Controller
              render={({ field }) => (
                <TextField
                  {...field}
                  placeholder={t("name")}
                  variant="standard"
                  style={{ width: 150 }}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault();
                      onSubmit();
                    }
                  }}
                  size="small"
                />
              )}
              name="name"
              control={control}
            />
          </Grid>
          <Grid>
            <Stack direction="row">
              <ClearLogo
                tooltipLabel={t("clear")}
                props={{
                  onClick: () => reset(defaultValues),
                }}
              />
              <SearchLogo tooltipLabel={t("search")} />
            </Stack>
          </Grid>
        </Grid>}
        {/* Sticky bottom container for chips and scroll-to-top button */}
        
        <MuiBox
          sx={{
            position: 'fixed',
            left: 0,
            bottom: 0,
            width: '100%',
            zIndex: 1200,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '0 32px 16px 32px',
            pointerEvents: 'none',
          }}
        >
          <Stack direction="row" spacing={1} sx={windowSize.width > 600 ? {width: '100%', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 1, pointerEvents: 'auto', marginLeft: '50px' } :{width: '100%', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 1, pointerEvents: 'auto'}}>

            {!loading && <ButtonGroup sx={{ border: 'transparent', backdropFilter: 'blur(20px)', borderRadius: '10px' }} size={windowSize.width > 600 ? "large" : windowSize.width > 400 ? 'medium' : 'small'} aria-label="button group">
              {brands.map((el, index) => (

                <Button
                  label={t(el)}
                  key={index}
                  value={el}

                  onClick={() => {
                    setValue("brand", el);
                    filter();
                  }}
                  sx={{
                    minHeight: '48px',
                    border: 'none',
                    borderRadius: '10px',
                    background: el === getValues("brand") ? 'linear-gradient(90deg, #b388ff 0%, #ff80ab 100%)' : 'transparent',
                    display: 'inline-block',
                    '&:hover, &:focus': {
                      opacity: 1,
                      border: 'none',
                      color: el === getValues("brand") ? 'primary.light' : theme.palette.mode === "dark" ? 'primary.light' : 'primary.main',
                    },
                    opacity: 0.8,
                    fontWeight: el === getValues("brand") ? 'bold' : 'normal',
                    color: el === getValues("brand") ? 'primary.light' : theme.palette.mode === "dark" ? 'primary.light' : 'primary.main',
                    transition: 'box-shadow 0.2s, background 0.2s',

                  }}
                >{t(el)}</Button>
              ))}
            </ButtonGroup>}
            
            <MuiBox sx={{
              opacity: showScrollTop ? 1 : 0,
              transform: showScrollTop ? 'scale(1)' : 'scale(0.3)',
              transition: showScrollTop
                ? 'opacity 0.6s cubic-bezier(.4,0,.2,1), transform 0.6s cubic-bezier(.4,0,.2,1)'
                : 'opacity 0.6s cubic-bezier(.4,0,.2,1) 0.1s, transform 0.6s cubic-bezier(.4,0,.2,1) 0.1s',
              //visibility: showScrollTop ? 'visible' : 'hidden',
              backdropFilter: 'blur(20px)',
              borderRadius: '50%',
              pointerEvents: showScrollTop ? 'auto' : 'none',
            }}> 
              <Button
              sx={{
                background: 'linear-gradient(90deg, #b388ff 0%, #ff80ab 100%)',

                
                opacity: 0.8,
                '&:hover': {
                  background: 'linear-gradient(90deg, #b388ff 0%, #ff80ab 100%)',
                  color: 'white',
                  opacity: 1
                },
                borderRadius: '50%',
                minWidth: 0,
                width: 48,
                height: 48,
                fontSize: 24,
                padding: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'opacity 0.2s',
                zIndex: 1000,
                color:"primary.light"
              }}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              aria-label="Scroll to top"
            >
              <KeyboardArrowUpRoundedIcon fontSize="large"/>
            </Button>
              </MuiBox>
            
          
          </Stack>
          
        </MuiBox>
      </form>
      {viewMode === "table" && (
        <Table
          columns={columns}
          data={filteredData}
          warning="noSetFound"
          isPaginated={true}
          loading={loading}
          rowsperpageslist={[10, 50, 100]}
        />
      )}
      {viewMode === "cards" && (
        <Grid container spacing={2} sx={{ mt: 1 }}>
          {filteredData.slice(0, visibleCards).map((set) => (
            <Grid key={set.id} xs={12} sm={6} md={4} lg={3}>
              <Card
                tabIndex={0}
                role="button"
                aria-label={set.name}
                sx={{
                  position: 'relative',
                  height: 220,
                  display: 'flex',
                  alignItems: 'flex-end',
                  overflow: 'hidden',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  outline: 'none',
                  '&:hover, &:focus': {
                    transform: 'scale(1.03)',
                    boxShadow: 6,
                  },
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    navigate(`${set.id}`);
                  }
                }}
              >
                <MuiBox
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundImage: `url(${set.image || '/placeholder-set-image.png'})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    zIndex: 1,
                  }}
                />
                {/* Overlay for readability */}
                <MuiBox
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'rgba(0,0,0,0.45)',
                    zIndex: 2,
                  }}
                />
                <CardContent
                  sx={{
                    position: 'relative',
                    zIndex: 3,
                    color: 'white',
                    width: '100%',
                    minHeight: 100,
                    borderRadius: 0,
                    background: 'none',
                  }}
                >
                  <Typography
                    variant="h6"
                    gutterBottom
                    sx={{
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap',
                      maxWidth: '100%',
                      cursor: 'pointer',
                      marginBottom: '0px',
                    }}
                    onClick={() => navigate(`${set.id}`)}
                    title={set.id}
                  >
                    {set.name}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'white' }}>
                    {set.brand}
                  </Typography>
                  {set.subBrand && (
                    <Typography variant="body2" sx={{ color: 'white' }}>
                      {' ' + set.subBrand}
                    </Typography>
                  )}
                </CardContent>
              </Card>
            </Grid>
          ))}
          {isLoadingMore && (
            <Grid xs={12} sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
              <BouncingDots />
            </Grid>
          )}

        </Grid>
      )}
    </Box>
  );
}

export default Collection;

const Box = styled(MuiBox)(() => ({
  marginTop: "20px",
  padding: "0px 25px 0px 25px",
}));

// Bouncing dots loading animation
function BouncingDots() {
  return (
    <MuiBox sx={{ display: 'flex', alignItems: 'center', height: 40 }}>
      {[0, 1, 2].map((i) => (
        <MuiBox
          key={i}
          sx={{
            width: 10,
            height: 10,
            borderRadius: '50%',
            background: 'linear-gradient(90deg, #b388ff 0%, #ff80ab 100%)',
            margin: '0 6px',
            animation: `bounce 1s infinite`,
            animationDelay: `${i * 0.2}s`,
          }}
        />
      ))}
      <style>{`
        @keyframes bounce {
          0%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-12px); }
        }
      `}</style>
    </MuiBox>
  );
}