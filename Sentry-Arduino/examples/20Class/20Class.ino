#include <Arduino.h>
#include <Sentry.h>
#include <Wire.h>

typedef Sentry2 Sentry;

// #define SENTRY_I2C
#define SENTRY_UART
#define VISION_MASK Sentry::kVision20Classes
Sentry sentry;

const char* classes20[] = {"unknown",
                           "Airplane",
                           "Bicycle",
                           "Bird",
                           "Boat",
                           "Bottle",
                           "Bus",
                           "Car",
                           "Cat",
                           "Chair",
                           "Cow",
                           "Dining Table",
                           "Dog",
                           "Horse",
                           "Motorbike",
                           "Person",
                           "Potted Plant",
                           "Sheep",
                           "Sofa",
                           "Train",
                           "TV Monitor"};

unsigned long ts = millis();
unsigned long tn = ts;

int serial_putc(char c, struct __file*) {
  Serial.write(c);
  return c;
}

void setup() {
  sentry_err_t err = SENTRY_OK;

  Serial.begin(9600);
  fdevopen(&serial_putc, 0);

  printf("Waiting for sentry initialize...\n");
#ifdef SENTRY_I2C
  Wire.begin();
  while (SENTRY_OK != sentry.begin(&Wire)) { yield(); }
#endif  // SENTRY_I2C
#ifdef SENTRY_UART
  Serial3.begin(9600);
  while (SENTRY_OK != sentry.begin(&Serial3)) { yield(); }
#endif  // SENTRY_UART
  printf("Sentry begin Success.\n");
  printf("Sentry image_shape = %dx%d\n", sentry.cols(), sentry.rows());
  err = sentry.VisionBegin(VISION_MASK);
  printf("sentry.VisionBegin(kVisionCard): %s[0x%x]\n", err ? "Error" : "Success", err);
}

void loop() {
  ts = tn;
  int obj_num = sentry.GetValue(VISION_MASK, kStatus);
  tn = millis();
  if (obj_num) {
    printf("Totally %d objects in %lums:\n", obj_num, tn - ts);
    for (int i = 1; i <= obj_num; ++i) {
      int x = sentry.GetValue(VISION_MASK, kXValue, i);
      int y = sentry.GetValue(VISION_MASK, kYValue, i);
      int w = sentry.GetValue(VISION_MASK, kWidthValue, i);
      int h = sentry.GetValue(VISION_MASK, kHeightValue, i);
      int l = sentry.GetValue(VISION_MASK, kLabel, i);
      printf("  obj[%d]: x=%d,y=%d,w=%d,h=%d, label=%s\n", i, x, y, w, h, classes20[l]);
    }
  }
}
