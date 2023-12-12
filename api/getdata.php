<?php
include 'db_connect.php';

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

$sql = "SELECT * FROM users";
$result = $conn->query($sql);

$data = array();

if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $data[] = $row;
    }
    echo json_encode($data);
} else {
    echo json_encode(array('message' => 'No records found.', 'status' => false));
}

$conn->close();
?>
