import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { Container, Grid, Card, CardMedia, CardContent, Typography, Button, Box, Paper } from "@mui/material";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const blogData = [
  {
    id: 1,
    title: "Dinh dưỡng cho bà bầu trong 3 tháng đầu",
    description: "Những thực phẩm quan trọng mẹ bầu cần bổ sung để có một thai kỳ khỏe mạnh.",
    image: "https://medlatec.vn/media/15599/content/20200421_dinh-duong-cho-ba-bau.png",
    views: 1200,
    affiliateLink: "https://shopee.vn/dinh-duong-ba-bau"
  },
  {
    id: 2,
    title: "Những điều cần biết khi siêu âm thai nhi",
    description: "Hướng dẫn chi tiết về các mốc siêu âm quan trọng trong thai kỳ.",
    image: "https://medlatec.vn/media/15599/content/20200421_dinh-duong-cho-ba-bau.png",
    views: 950,
    affiliateLink: "https://shopee.vn/sieu-am-thai-nhi"
  },
  {
    id: 3,
    title: "Mẹo giảm nghén hiệu quả cho mẹ bầu",
    description: "Những cách đơn giản để giảm bớt triệu chứng ốm nghén khi mang thai.",
    image: "https://medlatec.vn/media/15599/content/20200421_dinh-duong-cho-ba-bau.png",
    views: 780,
    affiliateLink: "https://shopee.vn/meo-giam-nghen"
  }
];

function SauSinh() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    setBlogs(blogData);
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Hero Slider */}
      <Paper elevation={3} sx={{ overflow: "hidden", borderRadius: 2, mb: 4 }}>
        <Slider {...sliderSettings}>
          {blogs.map((blog) => (
            <Box key={blog.id} sx={{ position: "relative" }}>
              <CardMedia component="img" image={blog.image} alt={blog.title} height="300" />
              <Box sx={{ position: "absolute", bottom: 20, left: 20, background: "rgba(0,0,0,0.6)", color: "white", padding: 1, borderRadius: 1 }}>
                <Typography variant="h6">{blog.title}</Typography>
              </Box>
            </Box>
          ))}
        </Slider>
      </Paper>

      <Grid container spacing={3}>
        {/* List of Articles */}
        <Grid item xs={12} md={8}>
          {blogs.map((blog) => (
            <Card key={blog.id} sx={{ display: "flex", mb: 2, boxShadow: 2 }}>
              <CardMedia component="img" image={blog.image} alt={blog.title} sx={{ width: 150, height: 100 }} />
              <CardContent sx={{ flex: 1 }}>
                <Typography variant="h6" color="primary">{blog.title}</Typography>
                <Typography variant="body2" color="textSecondary">{blog.description}</Typography>
                <Typography variant="caption" color="textSecondary">👁 {blog.views} views</Typography>
                <Link to={`/blog/${blog.id}`} style={{ textDecoration: "none" }}>
                  <Button variant="contained" color="success" size="small" sx={{ mt: 1 }}>Đọc thêm</Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </Grid>

        {/* Sidebar */}
        <Grid item xs={12} md={4}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Typography variant="h6" color="primary" gutterBottom>Tin Nổi Bật</Typography>
            {blogs.map((blog) => (
              <Box key={blog.id} sx={{ display: "flex", alignItems: "center", mb: 2, pb: 1, borderBottom: "1px solid #ddd" }}>
                <CardMedia component="img" image={blog.image} alt={blog.title} sx={{ width: 80, height: 60, borderRadius: 1, mr: 2 }} />
                <Box>
                  <Typography variant="body2" fontWeight="bold">{blog.title}</Typography>
                  <Button variant="text" color="secondary" href={blog.affiliateLink} target="_blank" size="small">🛒 Mua ngay</Button>
                </Box>
              </Box>
            ))}
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default SauSinh;