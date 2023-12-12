<?php
include 'db_connect.php';

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

// Get the posted data
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);

$username = $request->username;
$email = $request->email;

$sql = "INSERT INTO users (username, email) VALUES (?, ?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param("ss", $username, $email);

if ($stmt->execute()) {
    echo json_encode(array('message' => 'Record created.', 'status' => true));
} else {
    echo json_encode(array('message' => 'Failed to create record.', 'status' => false));
}

$conn->close();
?>
