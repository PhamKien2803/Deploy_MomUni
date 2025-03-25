import React, { useEffect, useState } from "react";
import axios from "axios";
import { Grid, Card, CardMedia, CardContent, Typography, Container } from "@mui/material";
import { motion } from "framer-motion";

const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    hover: { scale: 1.05, transition: { duration: 0.3 } }
};

const BaiVietLienQuan = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const articlesRes = await axios.get("/articles");
                setArticles(articlesRes.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, []);

    return (
        <Container sx={{ py: 4 }}>
            <Grid container spacing={3} justifyContent="center">
                {articles.map((article, index) => (
                    <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            whileHover="hover"
                            variants={cardVariants}
                        >
                            <Card sx={{ borderRadius: 2, boxShadow: 3, display: "flex", flexDirection: "column", height: "100%" }}>
                                <CardMedia
                                    component="img"
                                    height="180"
                                    image={article.image}
                                    alt={article.title}
                                    sx={{ objectFit: "cover" }}
                                />
                                <CardContent sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
                                    <Typography variant="h6" fontWeight="bold" gutterBottom>
                                        {article.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" sx={{ overflow: "hidden", textOverflow: "ellipsis", display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical" }}>
                                        {article.description}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default BaiVietLienQuan;
