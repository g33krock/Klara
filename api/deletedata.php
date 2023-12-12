<?php
include 'db_connect.php';

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: DELETE');
header('Access-Control-Allow-Headers: Content-Type');

$postdata = file_get_contents("php://input");
$request = json_decode($postdata);

$id = $request->id;

$sql = "DELETE FROM your_table WHERE id = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("i", $id);

if ($stmt->execute()) {
    echo json_encode(array('message' => 'Record deleted.', 'status' => true));
} else {
    echo json_encode(array('message' => 'Failed to delete record.', 'status' => false));
}

$conn->close();
?>
