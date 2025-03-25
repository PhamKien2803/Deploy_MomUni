import React, { useState } from "react";
import { Grid, Card, CardMedia, CardContent, Typography, CardActions, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const BlogCard = ({ image, title, description, views, id }) => {
  const navigate = useNavigate();
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <Card
      onClick={toggleExpand}
      sx={{
        borderRadius: "12px",
        boxShadow: 3,
        transition: "all 0.3s ease-in-out",
        transform: isExpanded ? "scale(1.05)" : "scale(1)",
        cursor: "pointer",
      }}
    >
      <CardMedia component="img" height="200" image={image} alt={title} />
      <CardContent>
        <Typography variant="h6" fontWeight="bold">{title}</Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ mt: 1, display: isExpanded ? "block" : "none" }}
        >
          {description}
        </Typography>
        <Typography variant="caption" color="text.secondary" display="block" sx={{ mt: 1 }}>
          👁 {views} views
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={(e) => {
            e.stopPropagation();
            navigate(`/blog/${id}`);
          }}
        >
          Đọc thêm
        </Button>
      </CardActions>
    </Card>
  );
};

const BlogGrid = () => {
  const blogs = [
    { id: 1, image: "https://source.unsplash.com/300x225/?wave", title: "Wave", description: "Beautiful ocean waves.", views: 120 },
    { id: 2, image: "https://source.unsplash.com/300x225/?beach", title: "Beach", description: "Relaxing beach view.", views: 95 },
    { id: 3, image: "https://source.unsplash.com/300x225/?mountain", title: "Mountain", description: "Majestic mountain landscape.", views: 180 },
    { id: 4, image: "https://source.unsplash.com/300x225/?field", title: "Field", description: "Open green field.", views: 75 },
    { id: 5, image: "https://source.unsplash.com/300x225/?water", title: "Water", description: "Pure and clean water.", views: 150 },
    { id: 6, image: "https://source.unsplash.com/300x225/?river", title: "River", description: "Flowing river scene.", views: 200 },
  ];

  return (
    <Grid container spacing={3} sx={{ justifyContent: "center", marginTop: "40px" }}>
      {blogs.map((blog) => (
        <Grid item xs={12} sm={6} md={4} key={blog.id} sx={{ display: "flex", justifyContent: "center" }}>
          <BlogCard {...blog} />
        </Grid>
      ))}
    </Grid>
  );
};

export default BlogGrid;
