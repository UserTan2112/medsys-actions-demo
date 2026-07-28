const test = require("node:test");
const assert = require("node:assert/strict");
const { createAppointment } = require("../src/appointment");

test("creates an appointment with Scheduled status", () => {
    const appointment = createAppointment(
        "Sample Patient",
        "2026-08-15"
    );

    assert.equal(appointment.patientName, "Sample Patient");
    assert.equal(appointment.appointmentDate, "2026-08-15");
    assert.equal(appointment.status, "Scheduled");
});

test("rejects an appointment with missing information", () => {
    assert.throws(
        () => createAppointment("", "2026-08-15"),
        /required/
    );
});