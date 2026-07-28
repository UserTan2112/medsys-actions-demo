/**
 * Creates a simplified MedSys appointment record.
 *
 * @param {string} patientName
 * @param {string} appointmentDate
 * @returns {{patientName: string, appointmentDate: string, status: string}}
 */
function createAppointment(patientName, appointmentDate) {
    if (!patientName || !appointmentDate) {
        throw new Error("Patient name and appointment date are required.");
    }

    return {
        patientName,
        appointmentDate,
        status: "Scheduled"
    };
}

module.exports = { createAppointment };