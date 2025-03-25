import React, { useState, useEffect } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box,
  Typography,
  Button,
  Modal,
  Grid,
  Divider,
} from "@mui/material";
import { Category, Article, FilterList, Phone } from "@mui/icons-material";

const PageLayout = ({ children }) => {
  const [openAdPopup, setOpenAdPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setOpenAdPopup(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Grid container spacing={2} sx={{ display: "flex" }}>
      {/* Sidebar Trái (Danh mục) */}
      <Grid item xs={2}>
        <Drawer variant="permanent" anchor="left" sx={{ width: 240, flexShrink: 0 }}>
          <Box sx={{ width: 240, padding: 2 }}>
            <Typography variant="h6" fontWeight="bold">
              Danh mục
            </Typography>
            <List>
              {[
                { text: "Sản phẩm cho bé", icon: <Category /> },
                { text: "Sản phẩm cho mẹ", icon: <Category /> },
                { text: "Hướng dẫn chăm sóc", icon: <Article /> },
              ].map((item) => (
                <ListItem button key={item.text}>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItem>
              ))}
            </List>

            <Divider sx={{ my: 2 }} />

            <Typography variant="h6" fontWeight="bold">
              Bài viết nổi bật
            </Typography>
            <List>
              {["Cách chăm sóc bé sơ sinh", "Dinh dưỡng cho mẹ sau sinh", "Bỉm tã nào tốt nhất?"].map((title) => (
                <ListItem button key={title}>
                  <ListItemText primary={title} />
                </ListItem>
              ))}
            </List>

            <Divider sx={{ my: 2 }} />

            <Typography variant="h6" fontWeight="bold">
              Bộ lọc sản phẩm
            </Typography>
            <Button variant="outlined" startIcon={<FilterList />} fullWidth>
              Lọc theo giá
            </Button>
          </Box>
        </Drawer>
      </Grid>

      {/* Nội dung chính */}
      <Grid item xs={8}>
        <Box sx={{ padding: 2 }}>{children}</Box>
      </Grid>

      {/* Sidebar Phải (Quảng cáo) */}
      <Grid item xs={2}>
        <Drawer variant="permanent" anchor="right" sx={{ width: 240, flexShrink: 0 }}>
          <Box sx={{ width: 240, padding: 2 }}>
            <Typography variant="h6" fontWeight="bold">
              🔥 Flash Sale!
            </Typography>
            <Typography variant="body2" color="error">
              Còn lại: 02:15:30
            </Typography>
            <img src="https://cdn.tgdd.vn//Files/News/2022/05/11/hihi-1200x628-1.jpg" alt="Flash Sale" width="100%" style={{ borderRadius: 8, marginTop: 8 }} />
            <Button
              variant="contained"
              fullWidth
              sx={{
                mt: 1,
                backgroundColor: "#F8BBD0",
                "&:hover": { backgroundColor: "#F48FB1" },
                color: "#fff",
              }}
            >
              Mua ngay
            </Button>


            <Divider sx={{ my: 2 }} />

            <Typography variant="h6" fontWeight="bold">
              🌟 Khuyến mãi hot!
            </Typography>
            
            <Typography variant="body2">Giảm giá 30% cho bỉm trẻ em!</Typography>
            <img src="https://cdn1.concung.com/img/adds/2025/03/1742746237-cate-huggies.png" alt="Quảng cáo" width="100%" style={{ borderRadius: 8, marginTop: 8 }} />
            <img src="https://cdn1.concung.com/img/adds/2025/03/1742746758-cate-genki-1.png" alt="Quảng cáo" width="100%" style={{ borderRadius: 8, marginTop: 8 }} />
            <img src="https://cdn1.concung.com/img/adds/2025/03/1742746758-cate-genki-1.png" alt="Quảng cáo" width="100%" style={{ borderRadius: 8, marginTop: 8 }} />

            <Divider sx={{ my: 2 }} />

            <Typography variant="h6" fontWeight="bold">
              ☎ Hotline hỗ trợ
            </Typography>
            <Button variant="outlined" startIcon={<Phone />} fullWidth>
              Gọi ngay: 1900-8888
            </Button>
          </Box>
        </Drawer>
      </Grid>

      {/* Popup quảng cáo */}
      <Modal open={openAdPopup} onClose={() => setOpenAdPopup(false)}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "white",
            boxShadow: 24,
            p: 4,
            borderRadius: 2,
          }}
        >
          <Typography variant="h6" fontWeight="bold">
            🎉 Ưu đãi đặc biệt!
          </Typography>
          <Typography variant="body1">Giảm ngay 50% cho đơn hàng đầu tiên.</Typography>
          <Button variant="contained" color="primary" onClick={() => setOpenAdPopup(false)} sx={{ mt: 2 }}>
            Đóng
          </Button>
        </Box>
      </Modal>
    </Grid>
  );
};

export default PageLayout;
