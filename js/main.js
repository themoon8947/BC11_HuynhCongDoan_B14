//bài 1

document.getElementById("btnBai1").onclick=function(event){
event.preventDefault();
var diemToan=document.getElementById("txtDiemToan").value;
var diemLi=document.getElementById("txtDiemLi").value;
var diemHoa=document.getElementById("txtDiemHoa").value;
var khuVuc=document.getElementById("txtKhuVuc").value;
var doiTuong=document.getElementById("txtDoiTuong").value;
var diem_3Mon=parseInt(diemToan)+parseInt(diemLi)+parseInt(diemHoa);
var tongDiem;
var kvA=2;
var kvB=1;
var kvC=0.5;
var dt1=2.5;
var dt2=1.5;
var dt3=1;
if(!diemHoa||!diemLi||!diemToan||!khuVuc||!doiTuong){
    alert("Vui lòng nhập đầy đủ thông tin");
    return;
}
//khu vực x
else if(khuVuc=="X"&&doiTuong==0){
    tongDiem=diem_3Mon;
}else if(khuVuc=="X"&&doiTuong==1){
    tongDiem=parseInt(diemToan)+parseInt(diemLi)+parseInt(diemHoa)+dt1;
}
else if(khuVuc=="X"&&doiTuong==2){
    tongDiem=diem_3Mon+dt2;
}
else if(khuVuc=="X"&&doiTuong==3){
    tongDiem=diem_3Mon+dt3;
}
//khu vực a
else if(khuVuc=="A"&&doiTuong==0){
    tongDiem=diem_3Mon+kvA;
}else if(khuVuc=="A"&&doiTuong==1){
    tongDiem=diem_3Mon+dt1+kvA;
}
else if(khuVuc=="A"&&doiTuong==2){
    tongDiem=diem_3Mon+dt2+kvA;
}
else if(khuVuc=="A"&&doiTuong==3){
    tongDiem=diem_3Mon+dt3+kvA;
}

//khu vực b
else if(khuVuc=="B"&&doiTuong==0){
    tongDiem=diem_3Mon+kvB;
}else if(khuVuc=="B"&&doiTuong==1){
    tongDiem=diem_3Mon+dt1+kvB;
}
else if(khuVuc=="B"&&doiTuong==2){
    tongDiem=diem_3Mon+dt2+kvB;
}
else if(khuVuc=="B"&&doiTuong==3){
    tongDiem=diem_3Mon+dt3+kvB;
}
//khu vực c
else if(khuVuc=="C"&&doiTuong==0){
    tongDiem=diem_3Mon+kvC;
}else if(khuVuc=="C"&&doiTuong==1){
    tongDiem=diem_3Mon+dt1+kvC;
}
else if(khuVuc=="C"&&doiTuong==2){
    tongDiem=diem_3Mon+dt2+kvC;
}
else if(khuVuc=="C"&&doiTuong==3){
    tongDiem=diem_3Mon+dt3+kvC;
}

document.getElementById("XuatBai1").innerHTML="Tổng điểm là: "+tongDiem;

if(diemHoa==0||diemLi==0||diemToan==0||tongDiem<15){
    document.getElementById("KetQua").innerHTML="Không trúng tuyển";
}
else{
    document.getElementById("KetQua").innerHTML="Trúng tuyển";
}
}
//end bài 1 






//bài 2
    document.getElementById("btnBai2").onclick=function(event){
        event.preventDefault();
        var tongThuNhap=document.getElementById("txtTongThuNhap").value;
        var hoTen=document.getElementById("txtHoTen").value;
        var soNguoi=document.getElementById("txtSoNguoi").value;
        var thuNhapChiuThue=0;
        thuNhapChiuThue=(tongThuNhap-4000000)-(soNguoi*1600000);
        var thuePhaiChiu=0;
        console.log(thuNhapChiuThue);
        if(!hoTen||!tongThuNhap||!soNguoi){
            alert("Bạn phải điền đầy đủ thông tin");
            return;
        }
        else if(thuNhapChiuThue<=60000000){
            thuePhaiChiu=thuNhapChiuThue*0.05 
        }
        else if(thuNhapChiuThue<=120000000){
            thuePhaiChiu=(60000000*0.05) +((thuNhapChiuThue-60000000)*0.1);
        }
        else if(thuNhapChiuThue<=210000000){
            thuePhaiChiu=(60000000*0.05) +((120000000-60000000)*0.1)+((thuNhapChiuThue-120000000)*0.15);
        }
        else if(thuNhapChiuThue<=384000000){
            thuePhaiChiu=(60000000*0.05) +((120000000-60000000)*0.1)+((210000000-120000000)*0.15)+((thuNhapChiuThue-210000000)*0.2);
        }
        else if(thuNhapChiuThue<=624000000){
        
            thuePhaiChiu=(60000000*0.05) +((120000000-60000000)*0.1)+((210000000-120000000)*0.15)+((384000000-210000000)*0.2)+((thuNhapChiuThue-384000000)*0.25);
        }
        else if(thuNhapChiuThue<=960000000){
            thuePhaiChiu=(60000000*0.05) +((120000000-60000000)*0.1)+((210000000-120000000)*0.15)+((384000000-210000000)*0.2)+((624000000-384000000)*0.25)+((thuNhapChiuThue-624000000)*0.3)
        }
        else
        {
            thuePhaiChiu=(60000000*0.05) +((120000000-60000000)*0.1)+((210000000-120000000)*0.15)+((384000000-210000000)*0.2)+((624000000-384000000)*0.25)+((960000000-624000000)*0.3)+((thuNhapChiuThue-960000000)*0.35)
        }
        var chuyenDoi = new Intl.NumberFormat('vn-VN');
    var tienChuyenDoi = chuyenDoi.format(thuePhaiChiu);
    var tienChuyenDoiTongThuNhap = chuyenDoi.format(thuNhapChiuThue);

    document.getElementById("thead").style.opacity="1";

    var taoTR_tbody=document.createElement("tr");

    var taoTD_Ten=document.createElement("td");
    taoTD_Ten.innerHTML=hoTen;
    var taoTD_TongThuNhap=document.createElement("td");
    taoTD_TongThuNhap.innerHTML=tienChuyenDoiTongThuNhap+"VND";
    var taoTD_SoNguoi=document.createElement("td");
    taoTD_SoNguoi.innerHTML=soNguoi;
    var taoTD_thanhTien=document.createElement("td");
    taoTD_thanhTien.innerHTML=tienChuyenDoi+"&nbsp; VND";

    
    taoTR_tbody.appendChild(taoTD_Ten);
    taoTR_tbody.appendChild(taoTD_SoNguoi);
    taoTR_tbody.appendChild(taoTD_TongThuNhap);
    taoTR_tbody.appendChild(taoTD_thanhTien);

    document.getElementById("tbody").appendChild(taoTR_tbody);
        // document.getElementById("XuatBai2").innerHTML="Thuế bạn cần phải đóng là: "+tienChuyenDoi+" VND";
    
    
    }
//end bài 2









//Bài 3
document.getElementById("btnBai3").onclick=function(event){
    event.preventDefault();
    var tenChuHo=document.getElementById("txtChuHo").value;
    var soDien=document.getElementById("txtSoDien").value;
    var tienDien=0;
    var bac1=500;
    var bac2=650;
    var bac3=850;
    var bac4=1100;
    var bac5=1300;

    if(soDien<0||!soDien||!tenChuHo){
        alert("Vui lòng xem thông tin bạn điền chưa chính xác hoặc không đầy đủ");
        return;
    }
    else if(soDien<=50){
        tienDien=soDien*bac1;
    }
    else if(soDien<=100){
        tienDien=50*bac1 +((soDien-50)*bac2);
    }
    else if(soDien<=200){
        tienDien=(50*bac1)+(50*bac2)+((soDien-100)*bac3);
    }
    else if(soDien<=350){
        tienDien=(50*bac1)+(50*bac2)+(100*bac3)+((soDien-200)*bac4);
    }
    else if(soDien>350){
        tienDien=(50*bac1)+(50*bac2)+(100*bac3)+(150*bac4)+((soDien-350)*bac5);
    }
    var chuyenDoi = new Intl.NumberFormat('vn-VN');
    var tienChuyenDoi = chuyenDoi.format(tienDien);
    // document.getElementById("XuatBai3").innerHTML=tienChuyenDoi;
    document.getElementById("thead").style.opacity="1";

    var taoTR_tbody=document.createElement("tr");

    var taoTD_TenChuHo=document.createElement("td");
    taoTD_TenChuHo.innerHTML=tenChuHo;
    var taoTD_SoDien=document.createElement("td");
    taoTD_SoDien.innerHTML=soDien+"kW";
    var taoTD_thanhTien=document.createElement("td");
    taoTD_thanhTien.innerHTML=tienChuyenDoi+"&nbsp; VND";

    
    taoTR_tbody.appendChild(taoTD_TenChuHo);
    taoTR_tbody.appendChild(taoTD_SoDien);
    taoTR_tbody.appendChild(taoTD_thanhTien);

    document.getElementById("tbody").appendChild(taoTR_tbody);
}
//end bài 3








//bài 4

function layLoaiKH() {
    var radioNhaDan = document.getElementById("NhaDan");
    var radioDoanhNghiep = document.getElementById("DoanhNghiep");
    

    if (radioNhaDan.checked) {
        document.getElementById("txtSoKetNoi").disabled=true;
        console.log("a");
        return "NhaDan";
    }
    if (radioDoanhNghiep.checked) {
        document.getElementById("txtSoKetNoi").disabled=false;
        return "DoanhNghiep";
    }
    return null;
}

document.getElementById("NhaDan").onclick=function(){
    var radioNhaDan = document.getElementById("NhaDan");
    if (radioNhaDan.checked) {
        document.getElementById("txtSoKetNoi").value='';
        document.getElementById("txtSoKetNoi").disabled=true;
        
        return "NhaDan";
    }
    return null;
}
document.getElementById("DoanhNghiep").onclick=function(){
    var radioDoanhNghiep = document.getElementById("DoanhNghiep");
    if (radioDoanhNghiep.checked) {
        document.getElementById("txtSoKetNoi").disabled=false;
        return "DoanhNghiep";
    }
    return null;
}

document.getElementById("btnBai4").onclick=function(event){
    event.preventDefault();
    var maKH=document.getElementById("txtMaKH").value;
    var tenKH=document.getElementById("txtTenKH").value;
    var soKenh=document.getElementById("txtKenh").value;
    var ketNoiThem=document.getElementById("txtSoKetNoi").value;
    var loaiKH=layLoaiKH();
    var phiHdNhaDan=4.5;
    var phiDVNhaDan=20.5;
    var phiKenhNhaDan=7.5;

    var phiHDDN=15;
    var phiDVDN=75;
    var phiKenhDN=50;
    var phiKetNoiThem=5;
    var tong=0;
    if(!loaiKH||!maKH||!tenKH||!soKenh){
        alert("Vui lòng check đầy đủ thông tin");
        return;
    }
    switch (loaiKH) {
        case "NhaDan":
            
            tong= phiHdNhaDan+phiDVNhaDan+(phiKenhNhaDan*soKenh)
            break;
            
        case "DoanhNghiep":
            
            if(ketNoiThem==0){
                tong=phiDVDN+phiHDDN+(phiKenhDN*soKenh);
            }
            else{
                tong=phiDVDN+phiHDDN+(phiKenhDN*soKenh)+(ketNoiThem*phiKetNoiThem);
            }
            break;
        

        default:
            break;
    }
    document.getElementById("TenKH").innerHTML="Tên khách hàng : "+tenKH;
    document.getElementById("LoaiKH").innerHTML="Loại khách hàng : "+loaiKH;
    document.getElementById("PhiLapDat").innerHTML="Phí lắp đặt cáp của bạn là: "+tong+"$";
}







//end Bài 4