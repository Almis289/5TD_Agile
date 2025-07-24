<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php'; // DUY NHẤT dòng này nếu bạn cài qua Composer

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['email'] ?? '';
    $subject = $_POST['subject'] ?? '';
    $message = $_POST['message'] ?? '';

    if (!$email || !$subject || !$message) {
        echo "❌ Vui lòng nhập đầy đủ thông tin.";
        exit;
    }

    $mail = new PHPMailer(true);

    try {
        // Cấu hình SMTP
        $mail->CharSet = 'UTF-8'; // ✅ Quan trọng để không bị lỗi font
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPAuth = true;
        $mail->Username = 'nguyenkhuongquang12004@gmail.com';
        $mail->Password = 'nfvi bdrc tvvl zcjk'; // Mật khẩu ứng dụng Gmail
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = 587;

        $mail->setFrom('nguyenkhuongquang12004@gmail.com', '5TD Clothes Store');
        $mail->addAddress($email);

        $mail->isHTML(true);
        $mail->Subject = $subject;
        $mail->Body    = nl2br(htmlspecialchars($message)); // Có thể dùng: htmlentities() nếu cần

        $mail->send();
        echo "✅ Email đã được gửi thành công!";
    } catch (Exception $e) {
        echo "❌ Có lỗi khi gửi email: {$mail->ErrorInfo}";
    }
} else {
    echo "❌ Yêu cầu không hợp lệ.";
}
?>
