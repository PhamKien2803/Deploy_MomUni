import React from "react";
import { useParams } from "react-router-dom";
import blogData from "./blogData"; // Import dữ liệu từ file riêng
import BaiVietLienQuan from "../components/BaiVietLienQuan";

function BlogDetail() {
    const { id } = useParams();
    const blog = blogData.find((b) => b.id === parseInt(id));

    if (!blog) return <h2 style={{ textAlign: "center", marginTop: "50px" }}>Bài viết không tồn tại!</h2>;

    return (
        <div style={{ display: "flex", maxWidth: "1200px", margin: "auto", padding: "20px", gap: "20px" }}>
            {/* Cột chính - Nội dung bài viết */}
            <div style={{ flex: "2", padding: "20px", background: "#fff", borderRadius: "8px", boxShadow: "0 2px 4px rgba(0,0,0,0.1)" }}>
                <h1 style={{ fontSize: "28px", marginBottom: "10px", color: "#333", fontWeight: "bold" }}>{blog.title}</h1>
                <img src={blog.image} alt={blog.title} style={{ width: "100%", borderRadius: "8px", marginBottom: "20px" }} />
                <div dangerouslySetInnerHTML={{ __html: blog.content }} style={{ lineHeight: "1.8", fontSize: "16px", color: "#444" }}></div>

                <a href={blog.affiliateLink} target="_blank" rel="noopener noreferrer"
                    style={{ display: "block", marginTop: "20px", padding: "12px", background: "#ff5722", color: "white", textAlign: "center", textDecoration: "none", borderRadius: "5px", fontSize: "18px", fontWeight: "bold" }}>
                    🛒 Mua sản phẩm liên quan
                </a>
                <BaiVietLienQuan/>
            </div>
        </div>

    );
}

export default BlogDetail;
