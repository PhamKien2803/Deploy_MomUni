import React, { useState, useEffect } from "react";
import { Box, Typography, IconButton, Paper } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const tipsData = [
    "Mẹ bầu nên bổ sung axit folic để giúp thai nhi phát triển khỏe mạnh.",
    "Massage nhẹ nhàng giúp bé ngủ ngon hơn và tăng cường sự gắn kết với mẹ.",
    "Nên cho bé tắm nắng vào buổi sáng để hấp thụ vitamin D tự nhiên.",
    "Ăn thực phẩm giàu sắt giúp mẹ sau sinh nhanh hồi phục và có nhiều sữa hơn.",
    "Khi cho con bú, mẹ nên uống đủ nước để đảm bảo lượng sữa dồi dào.",
    "Đọc truyện hoặc hát ru giúp bé phát triển ngôn ngữ từ sớm.",
    "Dinh dưỡng cân bằng trong thai kỳ giúp bé phát triển toàn diện hơn.",
    "Mẹ sau sinh nên vận động nhẹ nhàng để phục hồi sức khỏe nhanh chóng.",
];

function AITips() {
    const [showTip, setShowTip] = useState(false);
    const [tip, setTip] = useState("");

    useEffect(() => {
        const showRandomTip = () => {
            setTip(tipsData[Math.floor(Math.random() * tipsData.length)]);
            setShowTip(true);
            setTimeout(() => setShowTip(false), 5000); // Ẩn sau 5 giây
        };

        const interval = setInterval(showRandomTip, 10000); // Hiện mỗi 10 giây

        return () => clearInterval(interval);
    }, []);

    return (
        <Box sx={{ position: "fixed", bottom: "20px", right: "20px", zIndex: 9999 }}>
            {/* Nhân vật AI */}
            <Box
                sx={{
                    width: "100px",
                    height: "100px",
                    backgroundImage: `url("https://img.freepik.com/premium-vector/chatbot-of-bot-ondersteuning-assistent-vector-pictogram_101884-219.jpg")`,
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    cursor: "pointer",
                    transition: "transform 0.3s ease-in-out",
                    "&:hover": { transform: "scale(1.1)" },
                }}
                onClick={() => {
                    setTip(tipsData[Math.floor(Math.random() * tipsData.length)]);
                    setShowTip(true);
                }}
            />

            {/* Hộp thoại gợi ý */}
            {showTip && (
                <Paper
                    sx={{
                        position: "absolute",
                        bottom: "120px",
                        right: "0",
                        width: 250,
                        padding: 2,
                        background: "white",
                        borderRadius: "10px",
                        boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
                        animation: "shake 0.5s ease-in-out",
                    }}
                >
                    <Typography variant="body1" sx={{ fontSize: "14px", fontStyle: "italic" }}>
                        "{tip}"
                    </Typography>
                    <IconButton size="small" onClick={() => setShowTip(false)} sx={{ position: "absolute", top: 5, right: 5 }}>
                        <CloseIcon fontSize="small" />
                    </IconButton>
                </Paper>
            )}
        </Box>
    );
}

export default AITips;
