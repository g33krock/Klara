<?php
include 'db_connect.php';

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: PUT');
header('Access-Control-Allow-Headers: Content-Type');

$postdata = file_get_contents("php://input");
$request = json_decode($postdata);

$id = $request->id;
$username = $request->username;
$email = $request->email;

$sql = "UPDATE your_table SET username = ?, email = ? WHERE id = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("ssi", $username, $email, $id);

if ($stmt->execute()) {
    echo json_encode(array('message' => 'Record updated.', 'status' => true));
} else {
    echo json_encode(array('message' => 'Failed to update record.', 'status' => false));
}

$conn->close();
?>
