import React, { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Typography,
  Grid,
  Box,
  Avatar,
  TextField,
} from "@mui/material";

const blogData = [
  {
    id: 1,
    title: "Dinh dưỡng cho bà bầu trong 3 tháng đầu",
    description: "Những thực phẩm quan trọng mẹ bầu cần bổ sung để có một thai kỳ khỏe mạnh.",
    image: "https://procarevn.vn/wp-content/uploads/2016/04/first-trimester-nutrition-page-001.jpg",
    views: 1200,
  },
  {
    id: 2,
    title: "Những điều cần biết khi siêu âm thai nhi",
    description: "Hướng dẫn chi tiết về các mốc siêu âm quan trọng trong thai kỳ.",
    image: "https://easterngroup.com.vn/uploads/image-3-compressed2.jpg",
    views: 950,
  },
  {
    id: 3,
    title: "Mẹo giảm nghén hiệu quả cho mẹ bầu",
    description: "Những cách đơn giản để giảm bớt triệu chứng ốm nghén khi mang thai.",
    image: "https://vnmedia2.monkeyuni.net/upload/web/storage_web/29-04-2022_11:01:24_14-meo-dan-gian-chua-om-nghen.jpg",
    views: 780,
  },
];

const initialComments = [
  { id: 1, name: "Nguyễn Văn A", avatar: "https://via.placeholder.com/50", text: "Bài viết rất hữu ích! Cảm ơn bạn." },
  { id: 2, name: "Trần Thị B", avatar: "https://via.placeholder.com/50", text: "Mình đã áp dụng và thấy hiệu quả lắm." },
  { id: 3, name: "Lê Văn C", avatar: "https://via.placeholder.com/50", text: "Có thêm thông tin về chế độ ăn uống nữa không ạ?" },
];

function MangThai() {
  const [blogs, setBlogs] = useState([]);
  const [comments, setComments] = useState(initialComments);
  const [newComment, setNewComment] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setBlogs(blogData);
  }, []);

  const handleCommentSubmit = () => {
    if (newComment.trim() !== "") {
      setComments([...comments, { id: comments.length + 1, name: "Bạn", avatar: "https://via.placeholder.com/50", text: newComment }]);
      setNewComment("");
    }
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Tiêu đề */}
      {/* Carousel */}
      <Carousel style={{ marginBottom: "30px" }}>
        {blogs.map((blog) => (
          <Carousel.Item key={blog.id}>
            <img className="d-block w-100" src={blog.image} alt={blog.title} style={{ borderRadius: "8px" }} />
            <Carousel.Caption>
              <Typography variant="h6" fontWeight="bold" color="white">
                {blog.title}
              </Typography>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>

      {/* Video */}
      <Box sx={{ textAlign: "center", mb: 4 }}>
        <iframe
          width="100%"
          height="400px"
          src="https://www.youtube.com/embed/AzKIqqyU5Fs"
          title="Video Mang Thai"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ borderRadius: "8px" }}
        ></iframe>
      </Box>

      {/* Danh sách Blog */}
      <Grid container spacing={3}>
        {blogs.map((blog) => (
          <Grid item xs={12} sm={6} md={4} key={blog.id}>
            <Card
              sx={{
                borderRadius: "20px",
                boxShadow: 4,
                transition: "transform 0.3s ease-in-out",
                "&:hover": { transform: "scale(1.05)" },
                backgroundColor: "#FFF5F5",
              }}
            >
              <CardMedia component="img" height="200" image={blog.image} alt={blog.title} />
              <CardContent>
                <Typography variant="h6" fontWeight="bold" color="#FF4081">
                  {blog.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                  {blog.description}
                </Typography>
                <Typography variant="caption" color="text.secondary" display="block" sx={{ mt: 1 }}>
                  👁 {blog.views} views
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  variant="contained"
                  sx={{ backgroundColor: "#FF80AB", color: "white" }}
                  fullWidth
                  onClick={() => navigate(`/blog/${blog.id}`)}
                >
                  Đọc thêm
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Bình luận */}
      <Box sx={{ mt: 5, p: 3, border: "1px solid #ddd", borderRadius: "12px", background: "#f9f9f9" }}>
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          Bình luận
        </Typography>

        {/* Danh sách bình luận */}
        {comments.map((comment) => (
          <Box
            key={comment.id}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
              p: 2,
              mb: 2,
              backgroundColor: "#fff",
              borderRadius: "8px",
              boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
            }}
          >
            <Avatar src={comment.avatar} alt={comment.name} />
            <Box>
              <Typography fontWeight="bold">{comment.name}</Typography>
              <Typography variant="body2" color="text.secondary">
                {comment.text}
              </Typography>
            </Box>
          </Box>
        ))}

        {/* Ô nhập bình luận */}
        <Box sx={{ display: "flex", alignItems: "center", mt: 3 }}>
          <Avatar src="https://via.placeholder.com/50" alt="User" />
          <TextField
            fullWidth
            variant="outlined"
            size="small"
            placeholder="Viết bình luận..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            sx={{ ml: 2, borderRadius: "20px" }}
          />
          <Button onClick={handleCommentSubmit} variant="contained" color="primary" sx={{ ml: 2, borderRadius: "20px" }}>
            Gửi
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

export default MangThai;
